window.setTimeout(function () {
    var ventana = window.open("", "", "width=300,height=150,top=300,left=400,location=no,menubar=no,resizable=no,toolbar=no,scrollbars=no");
    ventana.document.write("<h3>Bienvenido a la web oficial de la Asociación Deportiva I.E.S. Luis Vélez de Guevara</h3><button onclick=\"window.close()\">Cerrar</utton>");
    ventana.focus();
}, 10000);