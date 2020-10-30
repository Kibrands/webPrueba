// Función que valida la contraseña del formulario de login
function validar() {
    var contraseña = String(document.forms["identificacion"]["pwd"].value);
    var respuesta = "";
    var segura = true;
    if (contraseña.length < 8) {
        respuesta = "La contraseña es demasiado corta\n";
        segura = false;
    } else if (contraseña.length > 16) {
        respuesta = "La contraseña es demasiado larga\n";
        segura = false;
    }
    (contraseña.search(/[A-Z]/) != -1) ? segura = true : (segura = false, respuesta += "No contiene mayúsculas\n");
    (contraseña.search(/[a-z]/) != -1) ? segura = true : (segura = false, respuesta += "No contiene minúsculas\n");
    (contraseña.search(/[0-9]/) != -1) ? segura = true : (segura = false, respuesta += "No contiene números\n");
    (contraseña.search(/[-\_\@\#\$\%\&]/) != -1) ? segura = true : (segura = false, respuesta += "No contiene caracteres como -, _, @, #, $, %, &\n");

    segura ? alert("Tu contraseña es segura!!") : alert("Tu contraseña no es segura!!\n" + respuesta);

}