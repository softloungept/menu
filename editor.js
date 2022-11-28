class Editor {
  static _sectionPages;
  static _sectionButtons;
  static _convertedMenu = [];

  static init() {
    this.buildToolbar();
    this.buildNavigation();
    //this.convertMenuObj();
  }

  static convertMenuObj() {
    Resources.setLanguage("en");
    for (let section of Menu) {
      let newSection = {};
      newSection.section = {};
      newSection.section.pt = section.section ?? "";
      newSection.section.en = Resources.getString(section.section) ?? "";
      newSection.icon = section.icon;
      newSection.content = [];
      this._convertedMenu.push(newSection);

      for (let subSection of section.content) {
        let newSubSection = {};
        newSubSection.subSection = {};
        newSubSection.subSection.pt = subSection.subSection ?? "";
        newSubSection.subSection.en = Resources.getString(subSection.subSection) ?? "";
        newSubSection.subSectionInfo = {};
        newSubSection.subSectionInfo.pt = subSection.subSectionInfo ?? "";
        newSubSection.subSectionInfo.en = Resources.getString(subSection.subSectionInfo) ?? "";
        newSubSection.menu = [];
        newSection.content.push(newSubSection);

        for (let entry of subSection.menu) {
          let newEntry = {};
          newEntry.name = {};
          newEntry.name.pt = entry.name ?? "";
          newEntry.name.en = Resources.getString(entry.name) ?? "";
          newEntry.info = {};
          newEntry.info.pt = entry.info ?? "";
          newEntry.info.en = Resources.getString(entry.info) ?? "";
          newEntry.description = {};
          newEntry.description.pt = entry.description ?? "";
          newEntry.description.en = Resources.getString(entry.description) ?? "";
          newEntry.price = entry.price;
          newSubSection.menu.push(newEntry);
        }
      }
    }
  }

  static buildToolbar() {
    const holder = document.getElementById("languages");
    holder.innerHTML = "";

    const saveButton = document.createElement("label");
    saveButton.classList.add("material-symbols-outlined");
    saveButton.innerHTML = "save";
    saveButton.title = "Guardar"
    saveButton.onclick = () => this.saveMenuFile();
    holder.appendChild(saveButton);
  }

  static saveMenuFile() {
    const opts = {
      suggestedName: "menu.js",
			types: [{
				description: 'SoftLounge Menu',
				accept: { 'text/plain': ['.js'] },
			}],
		};
		window.showSaveFilePicker(opts).then(async (res) => {
      let fileData = JSON.stringify(Menu, null, 4);
      fileData = "const Menu = " + fileData + ";";

			const stream = await res.createWritable();
			await stream.write(fileData);
			await stream.close();
			console.log("Save complete:", res);
		});
  }

  static buildNavigation() {
    this._sectionPages = [];
    this._sectionButtons = [];

    const navigator = document.getElementById("navigator");
    navigator.innerHTML = "";

    for (let i = 0; i < Menu.length; i++) {
      let section = Menu[i];
      let page = this.buildSectionPage(section, Menu);
      let button = this.buildSectionButton(section, i);

      this._sectionPages.push(page);
      this._sectionButtons.push(button);

      navigator.appendChild(button);
    }

    this._sectionButtons[0].click();
  }

  static buildSectionButton(section, idx) {
    const icon = document.createElement("icon");
    icon.classList.add("material-symbols-outlined");
    icon.innerHTML = section.icon;

    const name = document.createElement("label");
    name.innerHTML = Resources.getString(section.section.pt);

    const column = document.createElement("div");
    column.appendChild(icon);
    column.appendChild(name);

    const button = document.createElement("button");
    button.classList.add("section-button");
    button.appendChild(column);
    button.onclick = () => this.selectSection(idx);
    return button;
  }

  static buildSectionPage(section, array) {
    const page = document.createElement("div");
    page.classList.add("section-page");

    for (let entry of section.content) {
      let subSection = this.buildSubSection(entry, section.content);
      page.appendChild(subSection);

      for (let product of entry.menu) {
        let productElement = this.buildProduct(product, entry.menu);
        productElement.classList.add("section-page-product");
        page.appendChild(productElement);
      }
    }
    return page;
  }

  static buildSubSection(subSection, array) {
    const holderRow = document.createElement("row");

    const holderCol = document.createElement("column");
    holderCol.classList.add("section-page-subSection");
    holderRow.appendChild(holderCol);

    for (let lang of Resources.getLanguages()) {
      let langRow = document.createElement("row");
      langRow.classList.add("editor-lang-row");
      holderCol.append(langRow);

      let langName = document.createElement("lang");
      langName.innerHTML = lang;
      langRow.appendChild(langName);

      let subSectionCol = document.createElement("column");
      langRow.appendChild(subSectionCol);

      let nameInput = this.createInput(subSection.subSection, lang);
      nameInput.classList.add("editor-subSection-name");
      subSectionCol.appendChild(nameInput);

      let infoInput = this.createInput(subSection.subSectionInfo, lang);
      subSectionCol.appendChild(infoInput);
    }

    const buttons = this.buildButtons(subSection, array);
    holderRow.appendChild(buttons);

    return holderRow;
  }

  static buildProduct(product, array) {
    const holderRow = document.createElement("row");

    const holderCol = document.createElement("column");
    holderRow.appendChild(holderCol);

    const priceInput = this.createInput(product, "price");
    priceInput.classList.add("editor-product-price");
    holderRow.appendChild(priceInput);

    for (let lang of Resources.getLanguages()) {
      let langRow = document.createElement("row");
      langRow.classList.add("editor-lang-row");
      holderCol.append(langRow);

      let langName = document.createElement("lang");
      langName.innerHTML = lang;
      langRow.appendChild(langName);

      let prodCol = document.createElement("column");
      langRow.appendChild(prodCol);

      let prodRow = document.createElement("row");
      prodCol.appendChild(prodRow);

      let nameInput = this.createInput(product.name, lang);
      nameInput.classList.add("section-page-product-name");
      prodRow.appendChild(nameInput);

      let infoInput = this.createInput(product.info, lang);
      prodRow.appendChild(infoInput);

      let descriptionInput = this.createInput(product.description, lang);
      prodCol.appendChild(descriptionInput);
    }

    const buttons = this.buildButtons(product, array);
    holderRow.appendChild(buttons);
    
    return holderRow;
  }
  
  static buildButtons(entry, array) {
    const idx = array.indexOf(entry);
    const buttons = document.createElement("div");
    buttons.classList.add("editor-buttons");

    if (idx > 0) {
      const moveUpButton = document.createElement("span");
      moveUpButton.classList.add("editor-button");
      moveUpButton.classList.add("material-symbols-outlined");
      moveUpButton.innerHTML = "arrow_upward";
      moveUpButton.title = "Mover para cima";
      moveUpButton.onclick = () => {
        array.splice(idx, 1);
				array.splice(idx - 1, 0, entry);
        this.buildNavigation();
      };
      buttons.appendChild(moveUpButton);
    }
    if (idx < array.length - 1) {
      const moveDownButton = document.createElement("span");
      moveDownButton.classList.add("editor-button");
      moveDownButton.classList.add("material-symbols-outlined");
      moveDownButton.innerHTML = "arrow_downward";
      moveDownButton.title = "Mover para baixo";
      moveDownButton.onclick = () => {
        array.splice(idx, 1);
				array.splice(idx + 1, 0, entry);
        this.buildNavigation();
      };
      buttons.appendChild(moveDownButton);
    }

    const deleteButton = document.createElement("span");
    deleteButton.classList.add("editor-button");
    deleteButton.classList.add("material-symbols-outlined");
    deleteButton.innerHTML = "delete";
    deleteButton.title = "Apagar";
    deleteButton.onclick = () => {
      if (confirm("Tem a certeza que deseja apagar este elemento?")) {
        array.splice(idx, 1);
        this.buildNavigation();
      }
    };
    buttons.appendChild(deleteButton);
    return buttons;
  }

  static createInput(obj, key, placeholder) {
    const input = document.createElement("input");
    input.classList.add("editor-input");
    input.placeholder = placeholder ?? key;
    input.value = obj[key] ?? "";
    input.onchange = () => obj[key] = input.value;
    return input;
  }

  static selectSection(idx) {
    for (let button of this._sectionButtons) {
      button.classList.remove("section-button-selected");
    } 
    this._sectionButtons[idx].classList.add("section-button-selected");

    const screen = document.getElementById("screen");
    screen.innerHTML = "";
    screen.appendChild(this._sectionPages[idx]);
    window.setTimeout(() => screen.scrollTo(0, 0), 100);
  }
}
