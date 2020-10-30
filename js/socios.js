//import { exportedCategoria } from './getCategoriaSegunEdad';
var socios = new Array();
var resultado = "";

function Socio(numeroSocio, dni, nombre, apellidos, fechaNacimiento, localidad) {
    this.numeroSocio = numeroSocio;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.localidad = localidad;
}

function darAlta(numeroSocio, dni, nombre, apellidos, fechaNacimiento, localidad) {
    socios[socios.length] = new Socio(numeroSocio, dni, nombre, apellidos, fechaNacimiento, localidad);
}

function darBajaPorNumeroSocio(numeroSocio) {
    socios.forEach(socio => {
        if (numeroSocio == socio.numeroSocio) {
            delete socio;
        }
    });
}

function darBajaPorDni(dni) {
    socios.forEach(socio => {
        if (dni == socio.dni) {
            delete socio;
        }
    });
}

function modificarLocalidad(numeroSocio, localidad) {
    socios.forEach(socio => {
        if (numeroSocio == socio.numeroSocio) {
            socio.localidad = localidad;
        }
    });
}

function mostrarSocios() {
    var resultado = "";
    resultado = `
    <table class="table table-bordered">
        <thead>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Categoría</th>
        </thead>
        <tbody>
    `;
    socios.forEach(socio => {
        resultado += "<tr><td>" + socio.nombre + "</td><td>" + socio.apellidos + "</td><td>" +
            getCategoria(socio.fechaNacimiento) + "</td></tr>";
    });
    resultado += "</tbody></table>";
    document.getElementById('contenido').innerHTML = resultado;
}

function getCategoria(fechaNacimiento) {
    var fecha = "" + fechaNacimiento;
    fechas = fecha.split("/");
    var categoria = "";
    fechas.forEach(element => {
        if (element.length == 4) {
            var anyoHoy = new Date().getFullYear();
            var edad = parseInt(anyoHoy) - parseInt(element);
            categoria = getCategoriaSegunEdad(edad);
        }
    });
    return categoria;
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

function buscarSocioPorDni(dni) {
    socios.forEach(socio => {
        if (dni == socio.dni) {
            document.getElementById('contenido').innerHTML = "<p>Nombre: " + socio.nombre + "<br>\nApellidos: " +
                socio.apellidos + "<br>\nDNI: " + socio.dni + "<br>\nNº Socio: " + socio.numeroSocio +
                "<br>\nNacimiento: " + socio.fechaNacimiento + "<br>\nLocalidad: " + socio.localidad;
        }
    });
}

function buscarSocioPorNombreYApellidos(nombre, apellidos) {
    socios.forEach(socio => {
        if (nombre == socio.nombre && apellidos == socio.apellidos) {
            document.getElementById('contenido').innerHTML = "<p>Nombre: " + socio.nombre + "<br>\nApellidos: " +
                socio.apellidos + "<br>\nDNI: " + socio.dni + "<br>\nNº Socio: " + socio.numeroSocio +
                "<br>\nNacimiento: " + socio.fechaNacimiento + "<br>\nLocalidad: " + socio.localidad;
        }
    });
}

function buscarSociosPorCategoria(categoria) {
    var cat = String(categoria);
    var anyo = 0;
    resultado = '<h2>' + cat + '</h2><table class="table table-bordered"><thead><th>Nombre</th><th>Año</th></thead><tbody>';
    switch (cat.toUpperCase()) {
        case "MICROS":
            buscador(0, 6);
            break;
        case "PRE-BENJAMÍN":
            buscador(6, 8);
            break;
        case "BENJAMÍN":
            buscador(8, 10);
            break;
        case "ALEVÍN":
            buscador(10, 12);
            break;
        case "INFANTIL":
            buscador(12, 14);
            break;
        case "CADETE":
            buscador(14, 16);
            break;
        case "JUVENIL":
            buscador(16, 19);
            break;
        case "SENIOR":
            buscador(19, 150);
            break;
        default:
            resultado += "Categoría no válida";
    }
    resultado += '</tbody></table>';
    document.getElementById('contenido').innerHTML = resultado;
}

function buscador(edadMinima, edadMaxima) {
    socios.forEach(socio => {
        var fechas = ("" + socio.fechaNacimiento).split("/");
        var anyoNacimiento = 0;
        var edad = 0;
        fechas.forEach(num => {
            if (num.length == 4) {
                anyoNacimiento = parseInt(num);
            }
        });
        edad = parseInt(new Date().getFullYear()) - anyoNacimiento;
        if (edad > parseInt(edadMinima) && edad <= parseInt(edadMaxima)) {
            resultado += '<tr><td>' + socio.nombre + " " + socio.apellidos +
             '</td><td>' + anyoNacimiento + '</td></tr>';
        }
    });
}

function buscarSociosPorLocalidad(localidad) {
    resultado = '<h2>' + localidad + '</h2><table class="table table-bordered"><thead><th>Nombre</th><th>Apellidos</th></thead><tbody>';
    socios.forEach(socio => {
        if (("" + localidad).toUpperCase() == ("" + socio.localidad).toUpperCase()) {
            resultado += '<tr><td>' + socio.nombre + '</td><td>' + socio.apellidos + '</td></tr>';
        }
    });
    resultado += '</tbody></table>';
    document.getElementById('contenido').innerHTML = resultado;
}