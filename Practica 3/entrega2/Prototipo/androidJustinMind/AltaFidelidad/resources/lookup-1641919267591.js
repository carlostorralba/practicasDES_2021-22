(function(window, undefined) {
  var dictionary = {
    "979a2f60-0c09-40af-bb3d-c3d54a32a7a7": "ProductoResultado",
    "74a9457e-7eeb-4012-bcb5-0478104a78a3": "MapaLocalizador",
    "dd531f10-fe4d-4875-a0f4-3dbbd22d4847": "ProductosReservados",
    "997eda43-3176-4bad-9fb7-45caa225b843": "RegistroLogging",
    "76ad2c35-fa2f-411f-9753-aa40cfbd87a4": "Registro",
    "efeeae6f-d2c7-4176-ac5d-cbb6488109cd": "AñadirProducto",
    "6ef23438-ec0f-4d08-8a42-0e0c4fd146af": "ProductosComercioX",
    "3525750a-2cd5-486b-ae79-225cc1232445": "LocalesCercanos",
    "88d9395e-8413-4814-a821-620d7f431b42": "ProductoBuscado",
    "0677f808-42ea-4244-b331-cc3b602c8ec0": "Usuario",
    "23d59fd9-cc64-41fe-9c87-4a02f734d230": "ComercioX",
    "0a05c32a-b7f0-47be-885e-36995b1a1452": "Comercios",
    "10a27818-fda6-4673-828a-bdf720b35618": "pagInicialProductos",
    "89bfad90-d5d8-4d01-ac1b-7d2473c38680": "Entrada",
    "c3a50173-5cdb-49d8-aaf1-9b872ec2ee05": "Mapa",
    "21e4d016-9de8-4a8f-ba61-74fc232bde77": "ProductosReservados_II",
    "7d1660ce-1f0f-423c-bf9e-781b50fb1d8e": "Loggueo",
    "3081a49c-401d-495e-ac5e-aa45f41eccf9": "Chats",
    "7ac7618e-a504-4f78-afbb-6dafcab65123": "ComerciosUsandoCategorias",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
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