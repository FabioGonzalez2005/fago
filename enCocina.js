pedirAlServidor();
function pedirAlServidor() {
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        mostrarInformacion(this);
    };
    xhttp.open("GET", "cocina.xml", true);
    xhttp.send();
}

function mostrarInformacion(xml) {
    let i;
    let xmlDoc = xml.responseXML;
    let table = '';
    let numeroMuebles = xmlDoc.getElementsByTagName("mueble").length;

    for (i = 0; i < numeroMuebles; i++) {
        let vimagen          = xmlDoc.getElementsByTagName("imagen")[i].childNodes[0].nodeValue;
        let valt             = xmlDoc.getElementsByTagName("alt")[i].childNodes[0].nodeValue;
        let vmarca           = xmlDoc.getElementsByTagName("marca")[i].childNodes[0].nodeValue;
        let vtituloIngles          = xmlDoc.getElementsByTagName("tituloIngles")[i].childNodes[0].nodeValue;
        let vprecio          = xmlDoc.getElementsByTagName("precio")[i].childNodes[0].nodeValue;
        let vprecioAnterior  = xmlDoc.getElementsByTagName("precioAnterior")[i].childNodes[0].nodeValue;
        let venvio           = xmlDoc.getElementsByTagName("envio")[i].childNodes[0].nodeValue;

        table += `<a class="t1 tarjeta transicionAgrandar2" href="#">
                    <img class="imagen-tarjeta" src="${vimagen}" alt="${valt}">
                    <div>
                        <div class="info-tarjeta">
                            <p class="infomarca-tarjeta">${vmarca}</p>
                            <p class="infotitulo-tarjeta">${vtituloIngles}</p>
                            <div class="contenedor-precio">
                                <p class="infoprecio-tarjeta">${vprecio} €</p>
                                <p class="infoprecioanterior-tarjeta">Precio anterior: <span class="tachado"> ${vprecioAnterior} €</span></p>
                                <p class="infoenvio-tarjeta">Envío rápido ${venvio} horas</p>
                            </div>
                        </div>
                    </div>
                  </a>`;
    }

    document.getElementById("resultado").innerHTML += table;
}