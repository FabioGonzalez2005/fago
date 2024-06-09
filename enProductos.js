document.getElementById("buscador").addEventListener("submit", function(event) {
    event.preventDefault();
    let precioMax = document.getElementById("rangeInput").value;
    consultarMuebles(precioMax);
});

function consultarMuebles(precioMax) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        muebles = JSON.parse(xhr.responseText).mueble;
        mostrarMuebles(precioMax, muebles);
    };
    xhr.open("GET", "total.json");
    xhr.send();
}

function mostrarMuebles(precioMax, muebles) {
    let resultados = 0;
    let resultadoHTML = "";
    for (let i = 0; i < muebles.length; i++) {
        if (parseFloat(muebles[i].precio) <= precioMax) {
            let mueble = muebles[i];
            let tarjeta =
            `<a class="t1 tarjeta transicionAgrandar2" href="#">
                <img class="imagen-tarjeta" src="${mueble.imagen}" alt="${mueble.alt}">
                <div>
                    <div class="info-tarjeta">
                        <p class="infomarca-tarjeta">${mueble.marca}</p>
                        <p class="infotitulo-tarjeta">${mueble.tituloIngles}</p>
                        <div class="contenedor-precio">
                            <p class="infoprecio-tarjeta">${mueble.precio} €</p>
                            <p class="infoprecioanterior-tarjeta">Precio anterior: <span class="tachado"> ${mueble.precioAnterior} €</span></p>
                            <p class="infoenvio-tarjeta">Envío rápido ${mueble.envio} horas</p>
                        </div>
                    </div>
                </div>
            </a>`;
            resultadoHTML += tarjeta;
            resultados++;
        }
    }
    document.getElementById("resultado").innerHTML = resultadoHTML;
    document.getElementById("num-resultados").textContent = resultados + " results";
    document.getElementById("num-resultados2").textContent = resultados;
    document.getElementById("num-resultados3").textContent = resultados;
}


function updateValue(value) { 
    document.getElementById('rangeValue').textContent = value;
}
