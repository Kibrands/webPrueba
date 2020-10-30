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

function exportedCategoria(edad) {
    return getCategoriaSegunEdad(edad);
}
export { exportedCategoria };