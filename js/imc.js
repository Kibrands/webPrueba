function imc() {
  do {
    // Inicialización de variables
    var altura = parseInt(prompt("Estatura en cm")) / 100; // cm a m
    var peso = parseFloat(prompt("Peso en kg"));
    var imc = peso / parseFloat(altura * altura); // imc = peso(kg)/altura^2(m)

    // Validación
    if (altura != null && altura > 0) { // La altura no será nula ni menor que 0
      if (peso != null && peso > 0) { // El peso no será nulo ni menor que 0
        if (isNaN(imc) == false) { // Como última comprobación, imc no será NaN
          // Pinta por pantalla tu IMC y la tabla de valores
          document.getElementById("utilidades").innerHTML = `
        <h2>IMC</h2>
        Tu <b>IMC</b> es <i>` + imc.toFixed(2) + `</i><br/>
        <b>&lt;16.00</b>: <i style="color: red;">Infrapeso (delgadez severa)</i><br/>
        <b>16.00 - 16.99</b>: <i style="color: orange;">Infrapeso (delgadez moderada)</i><br/>
        <b>17.00 - 18.49</b>: <i style="color: #D6C600;">Infrapeso (delgadez aceptable)</i><br/>
        <b>18.50 - 24.99</b>: <i style="color: green;">Peso normal</i><br/>
        <b>25.00 - 29.99</b>: <i style="color: #D6C600;">Sobrepeso</i><br/>
        <b>30.00 - 34.99</b>: <i style="color: orange;">Obeso (Tipo I)</i><br/>
        <b>35.00 - 40.00</b>: <i style="color: red;">Obeso (Tipo II)</i><br/>
        <b>&gt;40.00:</b>: <i style="color: darkred;">Obeso (Tipo III)</i>`;
        }
      }
    }
    /*
      Si los datos no son correctos, volverá a repetirse todo el proceso
      a través de un bucle do-while
    */
  } while (isNaN(imc));

}