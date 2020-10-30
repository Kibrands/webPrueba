function avisoLegal() {
    var miVentana = window.open("", "", "width=500,height=600,location=no,menubar=no,resizable=no,toolbar=no,scrollbars=no");
    miVentana.document.write(`
    <h3>Aviso legal</h3>
    <p>En cumplimiento del artículo 10 de la Ley 34/2002, del 11 de julio, de servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE) se exponen a continuación los datos identificativos de la empresa.</p>
    <p><b>Denominación social:</b><br/>
    Asociación Deportiva I.E.S. Luis Vélez de Guevara</p>
    <p><b>Número de identificación fiscal:</b><br/>
    Datos en la sede de la organización<br/>
    <b>Domicilio social:</b><br/>
    Av de Tomás Bevía, 1, 41400 Écija, Sevilla</p>
    <p><b>Correo electrónico</b><br/>
    info@iesluisvelez.org</p>
    <p><b>Teléfono:</b><br/>
    955 87 99 18</p>`);

}