//import { exportedCategoria } from './getCategoriaSegunEdad';

function categoria() {
    // Inicialización de variables
    var anyo = prompt("Año de nacimiento");
    var edad = 2019 - anyo; // Cálculo de la edad
    // Array de booleanos para, en la lista, poner en negrita la categoría resultado
    var seleccionado = [false, false, false, false, false, false, false, false];

    // Imprime por pantalla
    document.getElementById("utilidades").innerHTML =
        "<h2>Calculadora de Categoría</h2>";

    /* Para cada rango de edad, le da valor a la categoría seleccionada
      y le da valor true al valor en el array que se corresponde con
      su posición en la lista
    */
    if (edad <= 6) {
        seleccionado[0] = true;
    } else if (edad > 6 && edad <= 8) {
        seleccionado[1] = true;
    } else if (edad > 8 && edad <= 10) {
        seleccionado[2] = true;
    } else if (edad > 10 && edad <= 12) {
        seleccionado[3] = true;
    } else if (edad > 12 && edad <= 14) {
        seleccionado[4] = true;
    } else if (edad > 14 && edad <= 16) {
        seleccionado[5] = true;
    } else if (edad > 16 && edad <= 19) {
        seleccionado[6] = true;
    } else if (edad > 19) {
        seleccionado[7] = true;
    }
    var categoria = getCategoriaSegunEdad(edad);
    /* Imprime por pantalla tu categoría, seguido de la lista al completo
      de estas y resaltando la seleccionada en negrita
    */
    document.getElementById("utilidades").innerHTML +=
        "Tu categoría = <b>" + categoria + "</b><br/>";

    document.getElementById("utilidades").innerHTML += '<h3>Categorías:</h3>';
    if (seleccionado[0] == true) {
        document.getElementById("utilidades").innerHTML += "<p><b><u>Hasta 6 años: Micros</u></b></p>";
    } else {
        document.getElementById("utilidades").innerHTML += "<p>Hasta 6 años: Micros</p>";
    }

    if (seleccionado[1] == true) {
        document.getElementById("utilidades").innerHTML += "<p><b><u>Hasta 8 años: Pre-Benjamín</u></b></p>";
    } else {
        document.getElementById("utilidades").innerHTML += "<p>Hasta 8 años: Pre-Benjamín</p>";
    }

    if (seleccionado[2] == true) {
        document.getElementById("utilidades").innerHTML += "<p><b><u>Hasta 10 años: Benjamín</u></b></p>";
    } else {
        document.getElementById("utilidades").innerHTML += "<p>Hasta 10 años: Benjamín</p>";
    }

    if (seleccionado[3] == true) {
        document.getElementById("utilidades").innerHTML += "<p><b><u>Hasta 12 años: Alevín</u></b></p>";
    } else {
        document.getElementById("utilidades").innerHTML += "<p>Hasta 12 años: Alevín</p>";
    }

    if (seleccionado[4] == true) {
        document.getElementById("utilidades").innerHTML += "<p><b><u>Hasta 14 años: Infantil</u></b></p>";
    } else {
        document.getElementById("utilidades").innerHTML += "<p>Hasta 14 años: Infantil</p>";
    }

    if (seleccionado[5] == true) {
        document.getElementById("utilidades").innerHTML += "<p><b><u>Hasta 16 años: Cadete</u></b></p>";
    } else {
        document.getElementById("utilidades").innerHTML += "<p>Hasta 16 años: Cadete</p>";
    }

    if (seleccionado[6] == true) {
        document.getElementById("utilidades").innerHTML += "<p><b><u>Hasta 19 años: Juvenil</u></b></p>";
    } else {
        document.getElementById("utilidades").innerHTML += "<p>Hasta 19 años: Juvenil</p>";
    }

    if (seleccionado[7] == true) {
        document.getElementById("utilidades").innerHTML += "<p><b><u>20 años o más: Senior</u></b></p>";
    } else {
        document.getElementById("utilidades").innerHTML += "<p>20 años o más: Senior</p>";
    }

}

function getCategoriaSegunEdad(edad) {
    if (edad <= 6) {
        return "Micros";
    } else if (edad > 6 && edad <= 8) {
        return "Pre-Benjamín";
    } else if (edad > 8 && edad <= 10) {
        return "Benjamín";
    } else if (edad > 10 && edad <= 12) {
        return "Alevín";
    } else if (edad > 12 && edad <= 14) {
        return "Infantil";
    } else if (edad > 14 && edad <= 16) {
        return "Cadete";
    } else if (edad > 16 && edad <= 19) {
        return "Juvenil";
    } else if (edad > 19) {
        return "Senior";
    }
}