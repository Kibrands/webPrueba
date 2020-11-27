// Julio de la Matta Cadenas - DWEC - DAW 2
//import { exportedCategoria } from './getCategoriaSegunEdad';

// Inicialización de array para almacenar socios
var socios = new Array();
var resultado = "";

// Clase Socio -> Constructor
function Socio(numeroSocio, dni, nombre, apellidos, fechaNacimiento, localidad) {
    this.numeroSocio = numeroSocio;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.localidad = localidad;
}

// Función para dar de alta un socio
function darAlta() {
    // Inicialización de variables
    var existe = false;
    var dni = document.getElementById('dniAlta').value;
    var nombre = document.getElementById('nombreAlta').value;
    var apellidos = document.getElementById('apellidosAlta').value;
    var fechaNacimiento = document.getElementById('fechaNacimientoAlta').value;
    var localidad = document.getElementById('localidadAlta').value;
    socios.forEach(socio => {
        if (socio.dni == dni) {
            existe = true;
        }
    });
    // Si el socio existe o hay algún parámetro vacío, mostrará un mensaje de error
    if (!existe && nombre != "" && apellidos != "" && fechaNacimiento != "" && dni != "" && localidad != "") {
        var numeroSocio = 1;
        socios.forEach(socio => { // Si el número de socio ya existe, suma hasta encontrar uno vacío
            if (socio.numeroSocio == numeroSocio) {
                numeroSocio++;
            }
        });
        // Inserta un objeto Socio en el array con los datos del socio
        socios[socios.length] = new Socio(numeroSocio, dni, nombre, apellidos, fechaNacimiento, localidad);
        document.getElementById('contenido').innerHTML = '<p style="color: green; font-size: 2em;">Socio registrado correctamente.</p>';
    } else {
        document.getElementById('contenido').innerHTML = '<p style="color: red; font-size: 2em;">Error al introducir datos</p>';
    }
}

/*
    Función para dar de baja un socio según su Nº de socio o su DNI.
    He querido simplificar ambas funciones en una para la mejora y no repetición de código innecesario
*/
function darBaja() {
    resultado = "";
    if (document.getElementById('formaBaja').value == "numeroSocio") {
        socios.forEach(socio => { // Recorre el array en busca del socio a eliminar -> Nº Socio
            if (document.getElementById('campoBaja').value == socio.numeroSocio) {
                resultado = '<p style="color:green; font-size: 2em;">Socio con Nº de socio ' + socio.numeroSocio + " dado de baja correctamente.";
                socios.splice(socio, 1);
            }
        });
    } else if (document.getElementById('formaBaja').value == "dni") {
        socios.forEach(socio => { // Recorre el array en busca del socio a eliminar -> DNI
            if (document.getElementById('campoBaja').value == socio.dni) {
                resultado = '<p style="color:green; font-size: 2em;">Socio con DNI ' + socio.dni + " dado de baja correctamente.";
                socios.splice(socio, 1);
            }
        });
    }

    if (resultado == "") {
        resultado = '<p style="color:red; font-size: 2em;">Socio no válido.';
    }
    document.getElementById('contenido').innerHTML = resultado + "</p>";
}

// Función para modificar la localidad de un socio según su Nº de Socio
function modificarLocalidad() {
    resultado = "";
    socios.forEach(socio => { // Recorre el array, y si coincide, modifica la localidad
        if (document.getElementById('numeroSocioModificaLocalidad').value == socio.numeroSocio) {
            socio.localidad = document.getElementById('localidadModificaLocalidad').value;
            resultado = '<p style="color: green; font-size: 2em;">La localidad del socio nº ' + socio.numeroSocio +
                ' se ha modificado correctamente.</p>';
        }
    });
    if (resultado == "") { // Si el resultado vuelve vacío, dará un mensaje de error
        document.getElementById('contenido').innerHTML = '<p style="color: red; font-size: 2em;">El socio no existe.</p>';
    } else {
        document.getElementById('contenido').innerHTML = resultado;
    }
}

// Función para mostrar todos los socios en una tabla
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
    socios.forEach(socio => { // Cada socio irá en una línea de la tabla
        resultado += "<tr><td>" + socio.nombre + "</td><td>" + socio.apellidos + "</td><td>" +
            getCategoria(socio.fechaNacimiento) + "</td></tr>";
    });
    resultado += "</tbody></table>";
    // Muestra el resultado en la página
    document.getElementById('contenido').innerHTML = resultado;
}

// Función llamada por mostrarSocios() para calcular la categoría
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

/*
    Función para calcular la categoría según la edad.
    Esta función YA EXISTE en otro archivo js, pero JavaScript NO deja importar esta.
    Error:
        Uncaught SyntaxError: Unexpected token import
*/
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

// Función para buscar socios que contendrá las difrentes funciones según el tipo de búsqueda
function buscarSocios() {
    resultado = "";
    if (document.getElementById('selectBuscarSocios').value == "dni") { // DNI
        resultado = buscarSocioPorDni(document.getElementById('campoBuscarSocios').value);
    } else if (document.getElementById('selectBuscarSocios').value == "nombre") { // Nombre y Apellidos
        resultado = buscarSocioPorNombreYApellidos(document.getElementById('campoBuscarSocios').value);
    } else if (document.getElementById('selectBuscarSocios').value == "categoria") { // Categoría
        resultado = buscarSociosPorCategoria(document.getElementById('campoBuscarSocios').value);
    } else if (document.getElementById('selectBuscarSocios').value == "localidad") { // Localidad
        resultado = buscarSociosPorLocalidad(document.getElementById('campoBuscarSocios').value);
    }

    if (resultado == "") { // Si el resultado vuelve vacío, imprimirá un error
        resultado = '<p style="color: red; font-size: 2em;">No existen resultados.</p>';
    }

    document.getElementById('contenido').innerHTML = resultado;
}

// Función para buscar un socio por su DNI
function buscarSocioPorDni(dni) {
    resultado = "";
    socios.forEach(socio => { // Recorre el array de socios
        if (dni == socio.dni) { // Si el dni coincide, muestra los datos del socio
            resultado = "<p style=\"font-size: 2em;\">Nombre: " + socio.nombre + "<br>\nApellidos: " +
                socio.apellidos + "<br>\nDNI: " + socio.dni + "<br>\nNº Socio: " + socio.numeroSocio +
                "<br>\nNacimiento: " + socio.fechaNacimiento + "<br>\nLocalidad: " + socio.localidad + "</p>";
        }
    });
    return resultado;
}

// Función para buscar un socio por su nombre y apellidos
function buscarSocioPorNombreYApellidos(nombre) {
    resultado = "";
    socios.forEach(socio => { // Recorre el array de socios
        // Si coincide el nombre y apellidos, mostrará los datos del socio por pantalla
        if (("" + nombre).toUpperCase() == (socio.nombre + " " + socio.apellidos).toUpperCase()) {
            resultado = "<p style=\"font-size: 2em;\">Nombre: " + socio.nombre + "<br>\nApellidos: " +
                socio.apellidos + "<br>\nDNI: " + socio.dni + "<br>\nNº Socio: " + socio.numeroSocio +
                "<br>\nNacimiento: " + socio.fechaNacimiento + "<br>\nLocalidad: " + socio.localidad;
        }
    });
    return resultado;
}

// Función para buscar todos los socios dentro de una categoría y mostrar su nombre y año de nacimiento
function buscarSociosPorCategoria(categoria) {
    resultado = "";
    var cat = String(categoria);
    var anyo = 0;
    if (categoria != "") {
        resultado = '<h2>' + cat.toUpperCase() + '</h2><table class="table table-bordered"><thead><th>Nombre</th><th>Año</th></thead><tbody>';
        switch (cat.toUpperCase()) { // Busca por cada categoría
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
                resultado += '<tr><td style="color:red;font-size:2em">Categoría NO válida</td><td/></tr>';
        }
        resultado += '</tbody></table>';
    }
    return resultado;
}

// Función utilizada por buscarSociosPorCategoria para simplificar la búsqueda por categorías
function buscador(edadMinima, edadMaxima) {
    // Por cada socio, calcula la edad, y, si está en la categoría escogida, se devuelve a la función buscarSociosPorCategoria
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

// Función para buscar socios por localidad
function buscarSociosPorLocalidad(localidad) {
    resultado = "";
    resultado = '<h2>' + ("" + localidad).toUpperCase() +
        '</h2><table class="table table-bordered"><thead><th>Nombre</th><th>Apellidos</th></thead><tbody>';
    socios.forEach(socio => { // Recorre el array de socios y si pertenecen a la localidad escogida, se imprimirán
        if (("" + localidad).toUpperCase() == ("" + socio.localidad).toUpperCase()) {
            resultado += '<tr><td>' + socio.nombre + '</td><td>' + socio.apellidos + '</td></tr>';
        }
    });
    resultado += '</tbody></table>';
    return resultado;
}

// Función para mostrar el formulario de alta de un socio al hacer click en el botón
function formularioAlta() {
    document.getElementById('contenido').innerHTML = `
        <h2>Formulario alta de socios</h2>
        <form method="post">
            <table class="table table-borderless">
                <tbody>
                    <tr>
                        <td>DNI:</td>
                        <td><input type="text" class="form-control" id="dniAlta" placeholder="12345678A" required></td>
                    </tr>
                    <tr>
                        <td>Nombre:</td>
                        <td><input type="text" class="form-control" id="nombreAlta" required></td>
                    </tr>
                    <tr>
                        <td>Apellidos:</td>
                        <td><input type="text" class="form-control" id="apellidosAlta" required></td>
                    </tr>
                    <tr>
                        <td>Fecha de nacimiento:</td>
                        <td><input type="text" class="form-control" id="fechaNacimientoAlta" placeholder="dd/mm/aaaa" required></td>
                    </tr>
                    <tr>
                        <td>Localidad:</td>
                        <td><input type="text" class="form-control" id="localidadAlta" required></td>
                    </tr>
                    <tr>
                        <td><button class="btn btn-primary" onclick="darAlta()">Enviar</button></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </form>
    `;
}

// Función para mostrar el formulario de baja de un socio al hacer click en el botón
function formularioBajaNumeroSocio() {
    document.getElementById('contenido').innerHTML = `
        <h2>Formulario baja de socios</h2>
        <form method="post">
            <table class="table table-borderless">
                <tbody>
                    <tr>
                        <td>
                            <select class="btn btn-primary" id="formaBaja">
                                <option value="numeroSocio">Nº Socio</option>
                                <option value="dni">DNI</option>
                            </select>
                        </td>
                        <td><input type="text" class="form-control" id="campoBaja" required></td>
                    </tr>
                    <tr>
                        <td><button class="btn btn-primary" onclick="darBaja()">Enviar</button></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </form>
    `;
}

// Función para mostrar el formulario de modificación de la localidad de un socio al hacer click en el botón
function formularioModificarLocalidad() {
    document.getElementById('contenido').innerHTML = `
        <h2>Formulario para modificar la localidad</h2>
        <form method="post">
            <table class="table table-borderless">
                <tbody>
                    <tr>
                        <td>Nº Socio:</td>
                        <td><input type="text" class="form-control" id="numeroSocioModificaLocalidad" required></td>
                    </tr>
                    <tr>
                        <td>Localidad:</td>
                        <td><input type="text" class="form-control" id="localidadModificaLocalidad" required></td>
                    </tr>
                    <tr>
                        <td><button class="btn btn-primary" onclick="modificarLocalidad()">Enviar</button></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </form>
    `;
}

// Función para mostrar el formulario de búsqueda de socios al hacer click en el botón
function formularioBuscarSocios() {
    document.getElementById('contenido').innerHTML = `
        <h2>Formulario para modificar la localidad</h2>
        <form method="post">
            <table class="table table-borderless">
                <tbody>
                    <tr>
                        <td>
                            <select id="selectBuscarSocios" class="btn btn-primary">
                                <option value="dni">DNI</option>
                                <option value="nombre">Nombre y Apellidos</option>
                                <option value="categoria">Categoría</option>
                                <option value="localidad">Localidad</option>
                            </select>
                        </td>
                        <td><input type="text" class="form-control" id="campoBuscarSocios" required></td>
                    </tr>
                    <tr>
                        <td><button class="btn btn-primary" onclick="buscarSocios()">Enviar</button></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </form>
    `;
}