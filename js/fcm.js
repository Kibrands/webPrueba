function fcm() {
  do {
    // Inicialización de variables
    var edad = prompt("Indica tu edad");
    var sexo = prompt("Indica tu sexo (M/H)").toUpperCase();
    var fcm;

    // Validación de datos
    if (edad != null && edad > 0) { // La edad no puede ser null ni menor que 0
      // El sexo no puede ser null, y tendrá que ser h o m, si no, no será un dato válido
      if (sexo != null && (sexo.toUpperCase() == "H" || sexo.toUpperCase() == "M")) {
        // Imprime por pantalla
        document.getElementById("utilidades").innerHTML = "<h2>FCM</h2><b>FCM = </b>";

        // Cálculo de fcm según el sexo y la edad
        if (sexo == "M") {
          fcm = 226 - edad;
        } else if (sexo == "H") {
          fcm = 220 - edad;
        }

        // Imprime por pantalla la tabla de valores máximos y mínimos
        document.getElementById("utilidades").innerHTML +=
          "<i>" +
          fcm +
          "</i><br/><b>Zona de recuperación (" +
          (60 * fcm) / 100 +
          " - " +
          (70 * fcm) / 100 +
          ")<br/>Zona aeróbica (" +
          (70 * fcm) / 100 +
          " - " +
          (80 * fcm) / 100 +
          ")<br/>Zona anaeróbica (" +
          (80 * fcm) / 100 +
          " - " +
          (90 * fcm) / 100 +
          ")<br/>Línea roja (" +
          (90 * fcm) / 100 +
          " - " +
          fcm +
          ")";
      }
    }
  } while (isNaN(fcm)); // Si los datos no son válidos, el bucle se repite
}
