var phrases = [
    "TE RECOMIENDO ESTOS PRODUCTOS",
    "ESTOS SON PRODUCTOS DE CALIDAD",
    "SON NUESTROS MEJORES PRODUCTOS",
    "TU ERES LO MAS IMPORTANTE PARA NOSOTROS",
    "CALIDAD Y BUEN PRECIO EN DULCERIA LOS DIABLITOS",
    "GRACIAS POR VISISTAR EL SITIO WEB",
    "MEJORES DESCUENTOS ʕっ•ᴥ•ʔっ",
    "ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ",
    "(❍ᴥ❍ʋ)"
]

function mostrarFraseAleatoriaBasica() {
    const contenedor = document.getElementById('aside_recom_1');
    const indiceAleatorio = Math.floor(Math.random() * phrases.length);
    const frase = phrases[indiceAleatorio];

    if (contenedor) {
        contenedor.innerHTML = '<h3 class="titulo_recom">' + frase + '</h3>';
    }
}

var frases = [
    "Dulces que endulzan tu día.",
    "Tentación en cada bocado.",
    "Pura felicidad azucarada.",
    "Un mundo de sabores.",
    "Antojo y satisfacción.",
    "La receta de tu alegría.",
    "Azúcar, color y sabor.",
    "Date un capricho dulce.",
    "Momentos para endulzar.",
    "La dulzura hecha realidad.",
    "Elige tu favorito.",
    "Un escape delicioso.",
    "Sonrisas garantizadas.",
    "Sabor en cada mordisco.",
    "La felicidad es dulce.",
    "Irresistibles por naturaleza.",
    "Endulzamos tus momentos.",
    "Tu dosis de alegría."
]

function mostrarFraseAleatoriaBasicas_1() {
    const contenedor_1 = document.getElementById('aside_recom_2');
    const indiceAleatorio_1 = Math.floor(Math.random() * frases.length);
    const frase_1 = frases[indiceAleatorio_1];

    if (contenedor_1) {
        contenedor_1.innerHTML = '<h3 class="titulo_recom">' + frase_1 + '</h3>';
    }
}

window.addEventListener("load", () => {
    mostrarFraseAleatoriaBasica();
    mostrarFraseAleatoriaBasicas_1();
    setInterval(mostrarFraseAleatoriaBasica, 4000);
    setInterval(mostrarFraseAleatoriaBasicas_1, 4000);

});