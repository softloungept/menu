class Editor {
  static _currentIdx = 0;
  static _sectionPages;
  static _sectionButtons;
  static _convertedMenu = [];

  static init() {
    this.buildToolbar();
    this.buildNavigation();
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

    this._sectionButtons[this._currentIdx].click();
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

      let addProductButton = this.buildAddButton( "Adicionar novo produto", () => entry.menu.push({
        "name": { "pt": "", "en": "" },
        "info": { "pt": "", "en": "" },
        "description": { "pt": "", "en": "" },
        "price": "",
      }));
      page.appendChild(addProductButton);
    }

    const addSubSectionButton = this.buildAddButton( "Adicionar nova Secção", () => section.content.push({
      "subSection": { "pt": "", "en": "" },
      "subSectionInfo": { "pt": "", "en": "" },
      "menu": [],
    }));
    page.appendChild(addSubSectionButton);

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

      let nameInput = this.createInput(subSection.subSection, lang, `nome (${lang})`);
      nameInput.classList.add("editor-subSection-name");
      subSectionCol.appendChild(nameInput);

      let infoInput = this.createInput(subSection.subSectionInfo, lang, `informação adicional (${lang})`);
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

    const priceInput = this.createInput(product, "price", "preço");
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

      let nameInput = this.createInput(product.name, lang, `nome (${lang})`);
      nameInput.classList.add("section-page-product-name");
      prodRow.appendChild(nameInput);

      let infoInput = this.createInput(product.info, lang, `informação extra (${lang})`);
      prodRow.appendChild(infoInput);

      let descriptionInput = this.createInput(product.description, lang, `descrição (${lang})`);
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
        this.updateMenu();
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
        this.updateMenu();
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
        this.updateMenu();
      }
    };
    buttons.appendChild(deleteButton);
    return buttons;
  }

  static buildAddButton(text, onClick) {
    const icon = document.createElement("span");
    icon.classList.add("material-symbols-outlined");
    icon.innerHTML = "add";

    const label = document.createElement("span");
    label.innerHTML = text;

    const addButton = document.createElement("div");
    addButton.classList.add("editor-button");
    addButton.classList.add("editor-addButton");
    addButton.appendChild(icon);
    addButton.appendChild(label);
    addButton.onclick = () => {
      onClick();
      this.updateMenu();
    };
    return addButton;
  }

  static updateMenu() {
    const scrollPos = document.getElementById("screen").scrollTop;
    this.buildNavigation();
    window.setTimeout(() => document.getElementById("screen").scrollTop = scrollPos, 100);
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
    this._currentIdx = idx;
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
