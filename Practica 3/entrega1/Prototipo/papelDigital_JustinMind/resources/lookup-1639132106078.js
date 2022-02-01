(function(window, undefined) {
  var dictionary = {
    "df8f3548-b907-4d9f-81e4-cd33d38cfe28": "Comercio X",
    "d000112b-b697-4e6d-8240-24c2e9b9b675": "Categorías",
    "987bfe1d-6058-41f5-94c1-dd3934e68774": "productoResultado",
    "51954229-f695-4954-b35c-94637ade2cf9": "Home",
    "7e840217-c057-4c7e-b2f5-1d6c11fbe44d": "Mapa",
    "8131c7ab-5f19-4518-9fd4-269b3212b399": "inicioproductos",
    "4030d04c-2a5c-4d90-a4ab-e2066c162326": "productoReservado",
    "c011b213-fe01-455e-8d3d-87883bc26bcb": "productoBuscado",
    "e5ccfea6-3903-4ddf-872a-05759d68e5ea": "Comercios",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Welcome",
    "6921a84c-b765-4615-8ddb-f3688a4d9847": "Productos Comercio",
    "ee1f4bb9-3030-42c1-a3b1-ed4648e09759": "notReservarProducto",
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