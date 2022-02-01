(function(window, undefined) {
  var dictionary = {
    "10caf73b-b459-449f-af7a-dc235ef3dfbc": "loggueo",
    "d000112b-b697-4e6d-8240-24c2e9b9b675": "Categorías",
    "51954229-f695-4954-b35c-94637ade2cf9": "Home",
    "e2f19050-2ae6-4abe-945b-8730c8b88ddf": "registtoylogin - copia",
    "ee75b329-0248-4140-9324-d4da7bd5be3e": "entrada",
    "6921a84c-b765-4615-8ddb-f3688a4d9847": "Productos Comercio",
    "df8f3548-b907-4d9f-81e4-cd33d38cfe28": "Comercio X",
    "acdbe530-f556-44c9-8c5e-7c736e8c47d1": "LocalesCercanos",
    "987bfe1d-6058-41f5-94c1-dd3934e68774": "productoResultado",
    "cfefe221-37d0-4194-8222-4fc7564b04f4": "pagInicialProductos",
    "7e840217-c057-4c7e-b2f5-1d6c11fbe44d": "Mapa",
    "bab20965-d07b-4426-96d8-0659c7f9af33": "chats",
    "ab225462-59aa-448c-8f2a-85a92addb017": "mapaLocalizador",
    "32424d20-485b-44b6-aad3-014d251fb5ff": "pagUsuario",
    "c011b213-fe01-455e-8d3d-87883bc26bcb": "productoBuscado",
    "e5ccfea6-3903-4ddf-872a-05759d68e5ea": "Comercios",
    "07431c30-0c3f-44bd-b7aa-28e0ec175514": "productosReservados",
    "7aaaa8ae-d17d-4495-9565-a8f714ee87e4": "aniadirProductoUsuario",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Registro",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);