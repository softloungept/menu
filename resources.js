class Resources {
  static _language;

  static setLanguage(lang) {
    this._language = lang;
    // TODO: create a language cookie?
  }

  static getLanguage() {
    if (!this._language) {
      // TODO: get the language from cookies?
      this._language = "pt";
    }
    return this._language;
  }

  static getLanguages() {
    return Object.keys(this._svgs);
  }

  static getString(key) {
    return this._strings[this.getLanguage()][key] ?? key;
  }

  static getSvg(key) {
    return this._svgs[key] ?? "";
  }

  static _strings = {
    pt: {

    },
    en: {
      "Cafetaria": "Cafeteria",
      "Cervejas": "Beer",
      "Vinhos": "Wine",
      "Bebidas": "Drinks",
      "Comidas": "Food",
      "SUMOS NATURAIS": "NATURAL JUICES",
      "Laranja": "Orange",
      "Laranja-Morango": "Orange-Strawberry",
      "Morango": "Strawberry",
      "Frutos Vermelhos": "Red Berries",
      "(banana, morango, amoras, framboesas, mirtilos)": "(banana, strawberry, blackberries, raspberries, blueberries)",
      "(morangos, framboesas, amoras, mirtilos)": "(strawberry, raspberries, blackberries, blueberries)",
      "Banana-Manga": "Banana-Mango",
      "Banana-Laranja": "Banana-Orange",
      "Banana-Morango": "Banana-Strawberry",
      "Limonada": "Lemonade",
      "Limonada Menta": "Mint Lemonade",
      "Limonada Morango": "Strawberry Lemonade",
      "BATIDOS": "MILKSHAKES",
      "SUMOS/REFRIGERANTES": "JUICES/SOFT DRINKS",
      "Água tónica Schweppes": "Tonic water Schweppes",
      "Água tónica Fever Three": "Tonic water Fever Three",
      "Água tónica Nordic": "Tonic water Nordic",
      "(ananás; laranja)": "(pineapple; orange)",
      "(limão; pêssego; manga-ananás)": "(lemon; peach; mango-pineapple)",
      "(maçã; pera; frutos vermelhos; manga-laranja, pêssego)": "(apple; pear; red berries; mango-orange, peach)",
      "CAFETARIA": "CAFETERIA",
      "Café": "Expresso",
      "Café Bombom": "Candy Coffee",
      "(café com leite condensado)": "(coffee with condensed milk)",
      "Descafeinado": "Decaf",
      "Café duplo": "Double expresso",
      "Café c/Natas": "Coffee w/Cream",
      "(café, sumo limão, açúcar)": "(coffee, lemon juice, sugar)",
      "(café, whisky irlandês, natas)": "(coffee, Irish whiskey, cream)",
      "Chá": "Tea",
      "(camomila; cidreira; cidreira-mel; gengibre-limão; lúcia-lima; tília; verde; preto; frutos vermelhos; menta; príncipe; baunilha-caramelo; limão)": "(chamomile; lemon balm; lemon balm-honey; ginger-lemon; lemon verbena; linden; green; black; red fruits; mint; prince; vanilla-caramel; lemon)",
      "(duas chávenas)": "(two cups)",
      "Chocolate Quente": "Hot chocolate",
      "(clássico)": "(classic)",
      "(chocolate branco; chocolate menta; chocolate caramelo; chocolate maçã-pinhões; chocolate avelã; branco avelã)": "(white chocolate; mint chocolate; caramel chocolate; apple-pine nuts; hazelnut chocolate; hazelnut white)",
      "ÁGUAS": "WATERS",
      "(limão; frutos vermelhos; maracujá; tangerina)": "(lemon; red fruits; passion fruit; tangerine)",
      "(limão; groselha; pepino)": "(lemon; currant; cucumber)",
      "PRESSÃO": "DRAFT",
      "GARRAFA": "BOTTLE",
      "(maçã; frutos vermelhos)": "(apple; red fruits)",
      "(garrafa)": "(bottle)",
      "(copo/garrafa)": "(cup/bottle)",
      "DOURO TINTO": "DOURO RED",
      "DOURO BRANCO": "DOURO WHITE",
      "ALENTEJO TINTO": "ALENTEJO RED",
      "ALENTEJO BRANCO": "ALENTEJO WHITE",
      "DÃO TINTO": "DÃO RED",
      "(cachaça, lima, açúcar amarelo)": "(cachaça, lime, brown sugar)",
      "(vodka, lima, açúcar amarelo)": "(vodka, lime, brown sugar)",
      "(vodka black, lima)": "(vodka black, lime)",
      "(beirão e lima)": "(beirão and lime)",
      "(vodka, morango, açúcar amarelo)": "(vodka, strawberry, brown sugar)",
      "(vodka, kiwi, açúcar amarelo)": "(vodka, kiwi, brown sugar)",
      "(rum especial, sumo limão, hortelã, água c/gás, açúcar)": "(special rum, lemon juice, mint, sparkling water, sugar)",
      "(tequila, cointreau, sumo limão, sal no copo)": "(tequila, cointreau, lemon juice, salt in the glass)",
      "(rum, sumo de ananás, batida de côco)": "(rum, pineapple juice, coconut smoothie)",
      "(tequila, sumo laranja, groselha)": "(tequila, orange juice, blackcurrant)",
      "(vodka, blue coracão, sumo de limão)": "(vodka, blue coracão, lemon juice)",
      "(licor de café, vodka, café expresso)": "(coffee liqueur, vodka, espresso)",
      "(vodka, licor de morango, sumo de laranja)": "(vodka, strawberry liqueur, orange juice)",
      "(vodka, cointreau, sumo de arando, sumo de lima)": "(vodka, cointreau, cranberry juice, lime juice)",
      "(gin, menta, natas)": "(gin, mint, cream)",
      "(vodka, tequila, rum, triple sec, gin, sumo limão, cola)": "(vodka, tequila, rum, triple sec, gin, lemon juice, cola)",
      "(nota: com água tónica premium acresce 2.00€)": "(note: with premium tonic water add €2.00)",
      "(limão, pau de canela)": "(lemon, cinnamon stick)",
      "(bagas de zimbro, limão)": "(juniper berries, lemon)",
      "(laranja, vagem de baunilha)": "(orange, vanilla pod)",
      "(laranja, pau de canela)": "(orange, cinnamon stick)",
      "(maçã)": "(apple)",
      "(morangos e amora)": "(strawberries and blackberry)",
      "(pepino, hortelã)": "(cucumber, mint)",
      "(uva)": "(grape)",
      "(tomilho, alecrim)": "(thyme, rosemary)",
      "(uva, louro)": "(grape, laurel)",
      "(amora, morango)": "(blackberry, strawberry)",
      "(laranja, limão, pau de canela)": "(orange, lemon, cinnamon stick)",
      "(morango, amora)": "(strawberry, blackberry)",
      "(limão, lima)": "(lemon, lime)",
      "(maçã, lima)": "(apple, lime)",
      "(laranja, canela)": "(orange, cinnamon)",
      "(café, laranja)": "(coffee, orange)",
      "(vermute seco, gin London dry)": "(dry vermouth, gin London dry)",
      "(gin, campari, vermute tinto)": "(gin, campari, red vermouth)",
      "(gengibre, limão)": "(ginger, lemon)",
      "(morango, hortelã)": "(strawberry, mint)",
      "(limão, vagem de baunilha)": "(lemon, vanilla pod)",
      "(lima)": "(lime)",
      "PARA PARTILHAR": "TO SHARE",
      "Camarão ao alhinho": "Garlic shrimp",
      "Queijo de cabra fundido com mel e nozes": "Goat cheese melted with honey and walnuts",
      "Asinhas de frango": "Chicken wings",
      "Pica-Pau vaca": "'Pica-Pau' beef",
      "Pão de alho": "Garlic bread",
      "Pasta de atum": "Tuna spread",
      "Tâmaras com bacon": "Bacon-wrapped dates",
      "Tomate com queijo mozarela búfala": "Mozzarella with tomato",
      "Tábua de presunto ibérico": "Iberian prosciutto ham board",
      "Tábua de 2 queijos": "Cheese board (small)",
      "Tábua de 5 queijos": "Cheese board (large)",
      "(azeitonas, pasta atum, manteiga de alho, pão)": "(olives, tuna spread, garlic butter, bread) ",
      "Cesto pão": "Bread",
      "Pão Torrado": "Toasted bread",
      "Azeitonas": "Olives ",
      "Caracóis": "Snails",
      "(época)": "(season)",
      "CARNE": "MEAT",
      "(NOTA: Informamos que a cozinha encerra às 22:30)": "(NOTE: Please be advised that the kitchen closes at 22:30)",
      "(arroz, batata frita, feijão preto, farófia)": "(side dish: rice, french fries, black beans, farofia)",
      "Bife da vazia": "Beef Steak",
      "• Opção: molho cervejeiro": "• Option: beer sauce",
      "• Opções de acompanhamento: Risoto cogumelos/Linguine/Batata frita palito": "• Side dish option: mushroom risotto/linguine/french fries",
      "Peito de Frango marinado": "Marinated chicken breast",
      "• Side dish option: mushroom risotto/linguine/french fries": "• Side dish option: mushroom risotto/linguine/french fries",
      "Bifana no prato": "Pork",
      "(fruta, queijo, presunto, tomate, batata frita palito)": "(side dish: fruit, cheese, prosciutto ham, tomato and french fries)",
      "Linguine de polvo e camarão": "Linguine with octopus and shrimps",
      "Linguine Mediterrâneo": "Mediterranean Linguine",
      "(espargos, tomate cherry, mozarela, bacon, presunto)": "(asparagus, cherry tomato, mozzarella, bacon, prosciutto ham)",
      "Penne de frango, espinafres e tomate cherry": "Penne with marinated chicken breast, spinach and cherry tomato",
      "Penne de frango com cogumelos": "Penne with breast chicken and mushrooms",
      "RISOTOS": "RISOTTO",
      "Risoto de Camarão e limão com manjericão": "Shrimp Risotto with lemon and basil",
      "Risoto de espargos com queijo brie": "Asparagus Risotto with brie cheese",
      "Risoto de cogumelos": "Mushroom Risotto",
      "OMELETES": "OMELETTE",
      "(Acompanhamento: batata frita palito, tomate)": "(Side dish: french fries and tomato)",
      "Omelete Simples": "Simple omelette",
      "(cebola, salsa)": "(with onion and parsley)",
      "Omelete de Queijo ou Fiambre": "Cheese or ham omelette",
      "(cebola, salsa, queijo ou fiambre)": "(with onion, parsley, cheese or ham)",
      "Omelete Mista": "Mixed omelette",
      "(cebola, salsa, queijo, fiambre)": "(with onion, parsley, ham and cheese)",
      "Omelete de Presunto": "Prosciutto ham omelette",
      "(cebola, salsa, queijo, presunto)": "(with onion, parsley, cheese, prosciutto ham)",
      "Omelete de Frango": "Chicken omelette",
      "(cebola, salsa, queijo, frango)": "(with onion, parsley, cheese and chicken)",
      "Omelete de Camarão": "Shrimp omelette",
      "(cebola, salsa, queijo, camarão)": "(with onion, parsley, cheese and shrimps)",
      "Salada mista": "Mixed salad",
      "Ovo estrelado": "Fried egg",
      "Batata frita pacote": "Potato chips",
      "Batata frita palito": "French Fries",
      "Tremoços": "Lupini beans",
      "SOBREMESAS": "DESSERTS",
      "Panna Cotta com calda de frutos vermelhos": "Panna cotta with red fruits sauce",
      "Salada de frutas": "Fruit salad",
      "NO PÃO": "ON BREAD",
      "Prego em Bolo do Caco": "Beef steak with 'Bolo do Caco' bread",
      "Prego especial em Bolo do caco": "Special beef steak with 'Bolo do caco' bread",
      "Prego": "Beef steak sandwich",
      "Prego Especial": "Special beef steak sandwich",
      "(c/ queijo e presunto)": "(with cheese and prosciutto ham)",
      "Bifana": "Pork sandwich",
      "Bifana Especial": "Special pork sandwich",
      "Sandes de Ovo mexido": "Scrambled egg sandwich",
      "Cachorro em pão frade": "Hot dog with 'frade' bread",
      "Cachorro em pão de cachorro": "Hot dog",
      "TOSTAS": "TOAST",
      "Tosta de Atum": "Tuna toast",
      "(atum, maionaise, queijo, manteiga e orégãos)": "(tuna, mayonnaise, cheese, butter and oregano)",
      "Tosta de Frango": "Chicken toast",
      "(frango, maionaise, tomate, queijo, manteiga e orégãos)": "(chicken, mayonnaise, tomato, cheese, butter and oregano)",
      "Tosta de Molho Pesto": "Pesto Sauce toast",
      "(molho pesto, presunto, tomate, queijo, manteiga e orégãos)": "(pesto sauce, prosciutto ham, tomato, cheese, butter and oregano)",
      "Tosta Mista": "Mixed toast",
      "(queijo, fiambre, manteiga e orégãos)": "(cheese, ham, butter and oregano)",
      "Tosta de Queijo e Tomate": "Cheese and tomato toast",
      "Tosta de Queijo e Presunto": "Prosciutto ham and cheese toast",
      "Tosta de Queijo ou Fiambre": "Cheese or Ham toast",
      "TORRADAS": "TOASTED BREAD",
      "Torrada": "Toasted bread",
      "½ Torrada": "½ Toasted bread",
      "Torrada c/ Doce ou Mel": "Toasted bread with jam or honey",
      "½ Torrada c/ Doce ou Mel": "½ Toasted bread with jam or honey",
    }
  }

  static _svgs = {
    pt: {
      width: 600,
      height: 400,
      inner: `<rect width="600" height="400" fill="#f00"/> 
        <rect width="240" height="400" fill="#060"/>
        <g fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="0.573" stroke-linecap="round" stroke-linejoin="round">
        <path d="m318.24,262.04c-30.21-0.91-168.74-87.38-169.69-101.15l7.6496-12.757c13.741,19.966,155.36,104.06,169.27,101.08l-7.2299,12.823"/>
        <path d="m154.59,146.4c-2.7101,7.2937,36.149,31.318,82.903,59.754,46.752,28.434,87.065,46.006,90.053,43.486,0.18256-0.32544,1.4701-2.5409,1.352-2.5232-0.56001,0.84402-1.9234,1.1104-4.0506,0.49741-12.631-3.6433-45.575-18.765-86.374-43.506-40.798-24.743-76.294-47.544-81.811-57.232-0.38363-0.67116-0.65702-1.8962-0.60146-2.8487l-0.13405-0.002-1.1747,2.0532-0.16139,0.32191h-0.00088zm164.36,116.04c-0.51238,0.92957-1.4675,0.96044-3.2816,0.76112-11.3-1.2506-45.589-17.925-86.162-42.213-47.21-28.26-86.2-54.01-81.97-60.74l1.1509-2.0346,0.22665,0.0706c-3.8037,11.405,76.948,57.578,81.702,60.522,46.724,28.947,86.115,45.851,89.601,41.458l-1.2682,2.181v-0.002z"/>
        <path d="m240.17,169.23c30.237-0.23901,67.55-4.1319,89.023-12.69l-4.6265-7.5168c-12.692,7.0247-50.21,11.644-84.652,12.335-40.736-0.37483-69.49-4.1681-83.897-13.835l-4.3672,8.0045c26.484,11.207,53.623,13.587,88.52,13.703"/>
        <path d="m330.44,156.71c-0.73904,1.1818-14.743,6.0113-35.373,9.5753-13.988,2.1325-32.234,3.9555-55.004,3.9776-21.633,0.0203-39.305-1.5196-52.684-3.3329-21.656-3.3955-32.833-8.1201-36.965-9.7896,0.39509-0.78581,0.64908-1.337,1.0301-2.0708,11.895,4.736,23.124,7.5918,36.279,9.6158,13.291,1.8,30.75,3.362,52.276,3.3417,22.664-0.0229,40.709-1.9844,54.616-4.0534,21.155-3.4122,32.711-7.8034,34.334-9.8425l1.494,2.5788h-0.002zm-4.0603-7.6226c-2.293,1.8415-13.718,5.8932-33.819,9.1034-13.415,1.9226-30.472,3.6433-52.265,3.6645-20.704,0.0203-37.619-1.375-50.485-3.2491-20.414-2.6661-31.279-7.4754-35.196-8.8776,0.3898-0.67381,0.78666-1.3423,1.1941-2.0135,3.0479,1.5346,13.533,5.7909,34.226,8.7224,12.72,1.8036,29.661,3.1477,50.262,3.1265,21.69-0.0221,38.553-1.7762,51.883-3.6883,20.205-2.7799,31.077-7.9472,32.728-9.241l1.4728,2.4509v0.002z"/>
        <path d="m140.88,205.66c18.598,10.003,59.905,15.044,98.994,15.391,35.591,0.0564,81.958-5.5016,99.297-14.69l-0.47712-10.012c-5.4246,8.4773-55.113,16.609-99.206,16.276-44.093-0.3325-85.038-7.1429-98.687-15.959l0.0794,8.9914"/>
        <path d="m340.12,204.22,0.00088,2.3874c-2.606,3.1159-18.946,7.8255-39.437,11.142-15.595,2.391-35.927,4.1945-61.262,4.1945-24.069,0-43.263-1.7163-58.148-4.0014-23.529-3.4264-38.579-9.4262-41.6-11.217l0.0132-2.7852c9.0748,6.0334,33.661,10.447,41.917,11.798,14.788,2.2701,33.868,3.9732,57.817,3.9732,25.216,0,45.434-1.7912,60.931-4.1663,14.701-2.1237,35.644-7.6465,39.767-11.324h0.00088zm0.01-8.4922,0.00088,2.3874c-2.606,3.1142-18.946,7.8237-39.437,11.14-15.595,2.391-35.927,4.1945-61.262,4.1945-24.069,0-43.263-1.7145-58.148-4.0014-23.529-3.4246-38.579-9.4245-41.6-11.216l0.0132-2.7852c9.0748,6.0325,33.661,10.447,41.917,11.796,14.788,2.2719,33.868,3.9758,57.817,3.9758,25.216,0,45.434-1.7921,60.931-4.169,14.701-2.1237,35.644-7.6465,39.767-11.324l0.00088,0.002z"/>
        <path d="m239.79,260.32c-42.772-0.25489-79.421-11.659-87.16-13.544l5.6433,8.8344c13.67,5.7503,49.424,14.32,81.927,13.371,32.504-0.94809,60.91-3.466,80.928-13.211l5.7862-9.1555c-13.642,6.425-60.068,13.639-87.125,13.705"/>
        <path stroke-width="0.55" d="m323.3,253.72c-0.85016,1.2991-1.7171,2.5823-2.5963,3.8294-9.4417,3.3293-24.319,6.8245-30.597,7.844-12.824,2.6423-32.665,4.594-50.274,4.6029-37.89-0.55474-68.905-7.9719-83.496-14.299l-1.1773-2.0241,0.19225-0.30427,1.9966,0.77435c25.948,9.2834,55.091,12.987,82.698,13.652,17.538,0.0617,35.095-2.01,49.292-4.5491,21.771-4.3621,30.574-7.65,33.275-9.1405l0.68701-0.38541h-0.00088zm5.0172-8.2753c0.022,0.0256,0.0441,0.0503,0.0653,0.0776-0.63585,1.0733-1.2911,2.1652-1.9622,3.2623-5.0357,1.8-18.702,5.7988-38.659,8.5893-13.149,1.7912-21.322,3.526-47.479,4.034-49.015-1.2471-80.75-10.831-88.289-13.195l-1.1174-2.1431c28.406,7.4154,57.422,12.592,89.408,13.121,23.931-0.50976,34.112-2.2719,47.152-4.0499,23.271-3.6186,34.996-7.4498,38.515-8.5558-0.0441-0.0635-0.0961-0.13053-0.15433-0.19932l2.5231-0.9428-0.002,0.002z"/>
        <path d="m328.83,197.76c0.13873,28.137-14.26,53.386-25.858,64.525-16.408,15.759-38.163,25.896-63.569,26.363-28.37,0.52117-55.12-17.974-62.295-26.099-14.028-15.885-25.449-36.057-25.815-63.243,1.7376-30.709,13.793-52.1,31.268-66.769s40.743-21.813,60.121-21.302c22.358,0.59003,48.475,11.558,66.521,33.332,11.823,14.266,16.943,29.748,19.627,53.193zm-89.186-96.342c54.485,0,99.296,44.338,99.296,98.703,0,54.364-44.811,98.704-99.296,98.704s-98.924-44.339-98.924-98.704,44.439-98.703,98.924-98.703"/>
        <path d="m239.91,101.08c54.534,0,99.011,44.483,99.011,99.022,0,54.538-44.478,99.02-99.011,99.02-54.534,0-99.011-44.481-99.011-99.02s44.478-99.022,99.011-99.022zm-96.832,99.0224c0,53.26,43.736,96.842,96.832,96.842,53.097,0,96.833-43.582,96.833-96.842,0-53.262-43.737-96.844-96.833-96.844s-96.832,43.584-96.832,96.844z"/>
        <path d="m239.99,109.31c49.731,0,90.693,40.821,90.693,90.704,0,49.884-40.963,90.703-90.693,90.703s-90.693-40.819-90.693-90.703c0-49.883,40.964-90.704,90.693-90.704zm-88.515,90.7034c0,48.685,39.979,88.524,88.515,88.524s88.515-39.839,88.515-88.524c0-48.686-39.978-88.525-88.515-88.525-48.536,0-88.515,39.839-88.515,88.525z"/>
        <path d="m243.98,100.68-8.48545,0,0.01,198.96,8.51455,0z"/>
        <path d="m243.13,99.546h2.1598l0.0185,201.25h-2.1616l-0.0159-201.25zm-8.4213,0.0018h2.1766l0.003,201.25h-2.1783v-201.25z"/>
        <path d="m338.99,203.935,0-7.3554-5.99-5.58-34-9-49-5-59,3-42,10-8.48,6.28,0,7.3572l21.48-9.637,51-8h49l36,4,25,6z"/>
        <path d="m239.95,184.77c23.383-0.0432,46.07,2.2154,64.065,5.7194,18.569,3.7121,31.637,8.3556,36.105,13.571l-0.005,2.5823c-5.3884-6.4902-22.973-11.248-36.518-13.968-17.858-3.474-40.393-5.7168-63.647-5.6736-24.538,0.0459-47.387,2.3698-64.984,5.8032-14.12,2.8019-32.951,8.3679-35.302,13.858v-2.689c1.2911-3.8003,15.313-9.4792,34.984-13.417,17.729-3.4572,40.62-5.7415,65.302-5.7864zm0.01-8.4922c23.383-0.0423,46.07,2.2172,64.065,5.7194,18.569,3.7139,31.637,8.3556,36.105,13.571l-0.005,2.5823c-5.3884-6.4885-22.973-11.247-36.518-13.966-17.858-3.4757-40.393-5.7185-63.647-5.6736-24.538,0.0441-47.276,2.3698-64.875,5.8014-13.626,2.5832-33.226,8.3696-35.412,13.86v-2.6908c1.2911-3.7588,15.597-9.6414,34.985-13.417,17.729-3.4572,40.62-5.7397,65.302-5.7864z"/>
        <path d="m239.48,132.96c36.849-0.18433,68.99,5.1523,83.695,12.685l5.3638,9.279c-12.781-6.888-47.456-14.05-89.005-12.979-33.854,0.20814-70.027,3.7271-88.176,13.41l6.4035-10.709c14.895-7.7241,50.022-11.643,81.72-11.684"/>
        <path d="m239.97,140.62c21.017-0.0556,41.325,1.1298,57.476,4.0437,15.041,2.7993,29.385,7.0009,31.436,9.2604l1.5901,2.8099c-4.9881-3.257-17.401-6.8836-33.339-9.906-16.006-3.0083-36.3-4.0049-57.2-3.9502-23.722-0.0811-42.152,1.1712-57.969,3.9291-16.728,3.13-28.334,7.6015-31.197,9.7261l1.5583-2.9704c5.5631-2.8381,14.39-6.2592,29.223-8.9297,16.357-2.988,34.983-3.8841,58.423-4.0128h-0.00088zm-0.009-8.4843c20.113-0.0529,39.972,1.068,55.452,3.8506,12.209,2.3768,24.283,6.0872,28.704,9.3892l2.3256,3.6954c-3.9536-4.3947-18.836-8.5593-31.974-10.892-15.361-2.6494-34.395-3.698-54.508-3.8656-21.108,0.0591-40.615,1.352-55.752,4.1081-14.441,2.7481-23.76,6.0016-27.703,8.5425l2.0451-3.0868c5.4414-2.8646,14.232-5.4954,25.303-7.6465,15.249-2.7764,34.876-4.0358,56.108-4.0949z"/>
        <path d="m289.15,241.26c-18.218-3.4008-36.469-3.8947-49.217-3.7447-61.407,0.71967-81.244,12.609-83.665,16.209l-4.5894-7.4815c15.634-11.332,49.073-17.687,88.587-17.037,20.518,0.33602,38.224,1.6986,53.119,4.5835l-4.2358,7.4727"/>
        <path stroke-width="0.55" d="m239.58,236.46c17.082,0.25488,33.849,0.96044,50.033,3.9784l-1.172,2.069c-15.031-2.7746-31.055-3.8365-48.803-3.75-22.663-0.17727-45.585,1.9394-65.541,7.6668-6.2968,1.7524-16.721,5.8006-17.784,9.1458l-1.1659-1.9226c0.33601-1.9773,6.6363-6.081,18.414-9.3901,22.858-6.5458,44.239-7.6491,66.019-7.799v0.002zm0.77519-8.5963c17.698,0.33073,35.975,1.1492,53.74,4.6681l-1.2206,2.1537c-16.042-3.1847-31.369-4.2466-52.415-4.5702-22.735,0.0414-46.851,1.6625-68.778,8.0372-7.0791,2.062-19.297,6.5202-19.704,10.05l-1.1659-2.0655c0.26545-3.2059,10.842-7.388,20.358-10.156,22.096-6.4241,46.275-8.076,69.186-8.1174z"/>
        <path d="M327.58,247.38,320.201,258.829,299,240,244,203,182,169,149.81,157.99,156.67,145.27,159,144l20,5,66,34,38,24,32,23,13,15z"/>
        <path d="m148.65,158.29c5.646-3.8294,47.139,14.655,90.555,40.834,43.301,26.254,84.677,55.921,80.942,61.473l-1.2285,1.9323-0.56354,0.4445c0.12083-0.0864,0.74345-0.84755-0.0609-2.906-1.8449-6.0704-31.195-29.491-79.894-58.895-47.475-28.309-87.041-45.371-90.997-40.494l1.247-2.3892h-0.00089zm180.44,88.927c3.57-7.052-34.916-36.044-82.632-64.272-48.813-27.666-83.994-43.951-90.42-39.095l-1.4278,2.5991c-0.0124,0.14287,0.052-0.17727,0.35364-0.4101,1.1685-1.0195,3.1052-0.95074,3.9792-0.96662,11.065,0.16581,42.667,14.709,87.006,40.128,19.428,11.315,82.071,51.491,81.832,62.789,0.0168,0.97102,0.0803,1.1712-0.28485,1.6519l1.5936-2.4236v-0.002z"/>
        </g>
        <g>
        <path fill="#fff" stroke="#000" stroke-width="0.67037" d="m180.6,211.01c0,16.271,6.6628,30.987,17.457,41.742,10.815,10.778,25.512,17.579,41.809,17.579,16.381,0,31.247-6.6525,42.016-17.389,10.769-10.735,17.443-25.552,17.446-41.88h-0.002v-79.189l-118.74-0.14111,0.0123,79.278h0.002z"/>
        <path fill="#f00" stroke="#000" stroke-width="0.50734" d="m182.82,211.12v0.045c0,15.557,6.4414,29.724,16.775,40.009,10.354,10.305,24.614,16.712,40.214,16.712,15.681,0,29.912-6.3606,40.222-16.626,10.308-10.265,16.697-24.433,16.699-40.044h-0.002v-76.826l-113.84-0.0185-0.0697,76.748m91.022-53.747,0.004,48.891-0.0414,5.1717h0.00088c0,1.3608-0.082,2.9122-0.24076,4.2333-0.92512,7.7294-4.4801,14.467-9.7451,19.708-6.1636,6.1357-14.671,9.9413-24.047,9.9413-9.327,0-17.639-3.9379-23.829-10.1-6.3497-6.32-10.03-14.986-10.03-23.947l-0.0132-54.023,67.94,0.12259,0.002,0.002z"/>
        <g id="castle3">
        <g id="castle" fill="#ff0" stroke="#000" stroke-width="0.5">
        <path stroke="none" d="m190.19,154.43c0.13493-5.521,4.0524-6.828,4.0806-6.8474,0.0282-0.0185,4.2314,1.4076,4.2173,6.8986l-8.2978-0.0512"/>
        <path d="m186.81,147.69-0.68172,6.3447,4.1406,0.009c0.0397-5.2493,3.9739-6.1225,4.0691-6.1031,0.0891-0.005,3.9889,1.1606,4.0929,6.1031h4.1511l-0.74962-6.3932-15.022,0.0379v0.002z"/>
        <path d="m185.85,154.06h16.946c0.35717,0,0.64908,0.35277,0.64908,0.78404,0,0.43039-0.29191,0.78141-0.64908,0.78141h-16.946c-0.35717,0-0.64908-0.35102-0.64908-0.78141,0-0.43127,0.29191-0.78404,0.64908-0.78404z"/>
        <path d="m192.01,154.03c0.0185-3.3126,2.2621-4.2501,2.2736-4.2483,0.00088,0,2.3423,0.96661,2.3609,4.2483h-4.6344"/>
        <path d="m186.21,145.05h16.245c0.34218,0,0.62263,0.31839,0.62263,0.70468,0,0.38717-0.28045,0.70467-0.62263,0.70467h-16.245c-0.34218,0-0.62263-0.31573-0.62263-0.70467,0-0.38629,0.28045-0.70468,0.62263-0.70468z"/>
        <path d="m186.55,146.47h15.538c0.32719,0,0.59529,0.31662,0.59529,0.70379,0,0.38805-0.2681,0.70467-0.59529,0.70467h-15.538c-0.32719,0-0.59529-0.31662-0.59529-0.70467,0-0.38717,0.2681-0.70379,0.59529-0.70379z"/>
        <path d="m191.57,135.88,1.2267,0.002v0.87136h0.89513v-0.89076l1.2567,0.004v0.88723h0.89778v-0.89076h1.2576l-0.002,2.0117c0,0.31574-0.25398,0.52035-0.54854,0.52035h-4.4113c-0.29633,0-0.56972-0.23724-0.5706-0.52652l-0.003-1.9879h0.00088z"/>
        <path d="m196.19,138.57,0.27691,6.4514-4.3028-0.0159,0.28486-6.4523,3.741,0.0168"/>
        <path id="cp1" d="m190.94,141.56,0.13141,3.4775-4.1256,0.002,0.11641-3.4793h3.8786-0.00089z"/>
        <use xlink:href="#cp1" x="10.609"/>
        <path id="cp2" d="m186.3,139.04,1.1994,0.003v0.87224h0.8775v-0.89253l1.2294,0.004v0.889h0.87926v-0.89253l1.2302,0.002-0.002,2.0117c0,0.31398-0.2487,0.51859-0.5362,0.51859h-4.3169c-0.28926,0-0.55824-0.23548-0.55913-0.52564l-0.003-1.9888h0.00088z"/>
        <use xlink:href="#cp2" x="10.609"/>
        <path fill="#000" stroke="none" d="m193.9,140.61c-0.0265-0.62706,0.87661-0.63411,0.86603,0v1.5364h-0.866v-1.536"/>
        <path id="cp3" fill="#000" stroke="none" d="m188.57,142.84c-0.003-0.6059,0.83693-0.61824,0.82635,0v1.1871h-0.826v-1.187"/>
        <use xlink:href="#cp3" x="10.641"/>
        </g>
        <use xlink:href="#castle" y="46.3198"/>
        <use xlink:href="#castle" transform="matrix(0.70460892,-0.70959585,0.70959585,0.70460892,-35.341459,275.10898)"/>
        </g>
        <use xlink:href="#castle" x="45.7138"/>
        <use xlink:href="#castle3" transform="matrix(-1,0,0,1,479.79195,0)"/>
        <g id="quina" fill="#fff">
        <path fill="#039" d="m232.636,202.406v0.005c0,2.2119,0.84927,4.2272,2.2118,5.6894,1.3652,1.4667,3.2454,2.3777,5.302,2.3777,2.0672,0,3.9439-0.90487,5.3029-2.3654,1.3581-1.4587,2.2021-3.47219,2.2021-5.693v-10.768l-14.992-0.0123-0.0273,10.766"/>
        <circle cx="236.074" cy="195.735" r="1.486"/>
        <circle cx="244.392" cy="195.742" r="1.486"/>
        <circle cx="240.225" cy="199.735" r="1.486"/>
        <circle cx="236.074" cy="203.916" r="1.486"/>
        <circle cx="244.383" cy="203.905" r="1.486"/>
        </g>
        <use xlink:href="#quina" y="-26.016"/>
        <use xlink:href="#quina" x="-20.799"/>
        <use xlink:href="#quina" x="20.745"/>
        <use xlink:href="#quina" y="25.784"/>
        </g>`
    },
    en: {
      width: 60,
      height: 30,
      inner: `<clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
        </clipPath>
        <g clip-path="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
        </g>`
    },
  }
}
