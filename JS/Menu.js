const caja = document.getElementById("caja");
const estadoBoton = false;
function toggleIcono() {
    caja.classList.toggle("visible");
}

const main = document.getElementById("show_product")
let scrollInterval = null;

function autoScroll() {
    scrollInterval = setInterval(() => {
        if (main.scrollTop + main.clientHeight >= main.scrollHeight) {
            main.scrollTop = 0;
        } else {
            main.scrollTop += 2;
        }
    }, 50)
}

function parar() {
    clearInterval(scrollInterval);
}

var aside = document.getElementById("scroll_container");
var aside_2 = document.getElementById("show_product");
var stop_generative = null;
let contadorGeneral = 0;
let contadorGeneralModal = 0;
var productos = [
    {
        imagen: "/IMG/chipotles.jpg",
        nombre_producto: "CHIPOTLES",
        texto_alternativo: "CHIPOTLES",
        descripcion_producto: "Los Chipotles de Barcel son botanas de maíz inflado con el distintivo sabor a chile chipotle y queso. Tienen forma de chile sin tallo, un color rojizo y una textura crujiente con un toque picante y ahumado Son un snack popular en México, disponibles en varias presentaciones de peso y se distribuyen en tiendas"
    },
    {
        imagen: "/IMG/Hot nuts.jpg",
        nombre_producto: "HOT NUTS",
        texto_alternativo: "HOT NUTS",
        descripcion_producto: "son una botana de cacahuates cubiertos con un sabor picosito y de limón. Son una opción de snack crujiente para acompañar bebidas o para añadir a mesas de botanas. Se pueden encontrar en diversaspresentaciones y existen variantes como los Hot Nuts Multintenso y Fuego."
    },
    {
        imagen: "/IMG/Aciduladitos.jpg",
        nombre_producto: "ACIDULADITOS",
        texto_alternativo: "ACIDULADITOS",
        descripcion_producto: "SON UN DULCE ACIDO Y BLANDO "
    },
    {
        imagen: "/IMG/paletas.jpg",
        nombre_producto: "PALETAS",
        texto_alternativo: "PALETAS",
        descripcion_producto: "Son dulces duros montados en un palillo, disponibles en una amplia variedad de sabores frutales y colores, ideales para refrescar."
    },
    {
        imagen: "/IMG/rockaleta.jpg",
        nombre_producto: "ROCALETA",
        texto_alternativo: "ROCALETA",
        descripcion_producto: "Una paleta de caramelo de capas múltiples, conocida por su centro de chicle y su sabor que va de picante a dulce en cada nivel."
    },
    {
        imagen: "/IMG/takis.jpg",
        nombre_producto: "TAKIS",
        texto_alternativo: "TAKIS",
        descripcion_producto: "Botanas de tortilla de maíz enrollada y frita, famosas por su intenso sabor a chile y limón, y su extrema crocancia."
    },
    {
        imagen: "/IMG/big mix.jpg",
        nombre_producto: "BIG MIX",
        texto_alternativo: "BIG MIX",
        descripcion_producto: "Una bolsa que contiene una mezcla variada de diferentes tipos de botanas, ofreciendo una combinación de sabores salados, picosos y crujientes."
    },
    {
        imagen: "/IMG/kacang.jpg",
        nombre_producto: "KACANG",
        texto_alternativo: "KACANG",
        descripcion_producto: "Cacahuates fritos con una capa crujiente y salada, perfectos como snack o acompañamiento de bebidas, con un distintivo sabor a especias."
    }
]

let indiceProductoActual = -1;
let indiceModalProductoActual = -1;

function crearHtmlProducto() {

    indiceProductoActual++;

    if (indiceProductoActual >= productos.length) {
        clearInterval(stop_generative);
        return;
    }

    contadorGeneral++

    const producto = productos[indiceProductoActual];

    var img = producto.imagen;
    var marca = producto.nombre_producto;
    var alt = producto.texto_alternativo;

    var contenido_span = `
       <div class="scrolling_card">
           <div class="span_container">
                <img src="${img}" alt="${alt}" class="span_img">
                <h1 class="span_title">${marca}</h1>
                    <div class="span_like" id="span_like_${contadorGeneral}" onclick="mostrarLike()">
                        <img src="/IMG/Like_1.png" alt="like" class="span_like" id="img_like_${contadorGeneral}">
                    </div>
                    <div class="span_dislike" id="span_dislike_${contadorGeneral}" onclick="mostrarDislike()">
                        <img src="/IMG/Dislike_1.png" alt="Dislike" class="span_dislike" id="img_dislike_${contadorGeneral}">
                    </div>

                <div class="span_btn"><a href="#stm-modal-${contadorGeneral}" class="stm-style-1">VER PRODUCTO</a></div>
            </div>
        </div>`

    if (aside) {
        aside.insertAdjacentHTML('beforeend', contenido_span);
    }
}

function crearModalProducto() {

    indiceModalProductoActual++;

    if (indiceModalProductoActual >= productos.length) {
        clearInterval(stop_generative);
        return;
    }

    contadorGeneralModal++

    const producto_M = productos[indiceModalProductoActual];

    var img_M = producto_M.imagen;
    var marca_M = producto_M.nombre_producto;
    var alt_M = producto_M.texto_alternativo;
    var des_M = producto_M.descripcion_producto;

    var contenido_span = `
        <div id="stm-modal-${contadorGeneralModal}" class="stm-modal">
            <div class="stm-modal-container">
                <div class="stm-modal-picture">
                    <img src="${img_M}" alt="${alt_M}" class="stm-modal-img">
                </div>

                <h2 class="stm-modal-title">${marca_M}
                    <span class="stm-modal-title stm-modal-title-bold"></span>
                </h2>

                <p class="stm-modal-paragraph">${des_M}</p>

                <a href="#" class="stm-modal-close">Cerrar</a>
            </div>
        </div>`

    if (aside_2) {
        aside_2.insertAdjacentHTML('beforeend', contenido_span);
    }
}

function cambiarContenidoAutomatico() {
    cambioInterval = setInterval(crearHtmlProducto, 10);
    cambioInterval = setInterval(crearModalProducto, 10);
}

var contador_Likes = 0;
var contador_Dislikes = 0;
var click = 0;
var estado_Like = false;
var estado_Dislike = false;

function mostrarLike() {

    for (let i = 0; i < productos.length; i++) {
        contador_Likes++
        const like_1 = document.getElementById(`span_like_${contador_Likes}`);
        const img_1 = document.getElementById(`img_like_${contador_Likes}`);

        const IMG_LIKE_ORIGINAL = "/IMG/Like_1.png"
        const IMG_LIKE_REEMPLAZO = "/IMG/Like_2.png";

        like_1.addEventListener('click', () => {
            click++;

            if (click === 1) {
                img_1.src = IMG_LIKE_REEMPLAZO;
            } else if (click === 2) {
                img_1.src = IMG_LIKE_ORIGINAL;
            }

            if (click >= 2) {
                click = 0;
            }

            estado_Like = true;
        });
    }
}


function mostrarDislike() {

    for (let i = 0; i < productos.length; i++) {
        contador_Dislikes++
        const like_2 = document.getElementById(`span_dislike_${contador_Dislikes}`);
        const img_2 = document.getElementById(`img_dislike_${contador_Dislikes}`);

        const IMG_DISLIKE_ORIGINAL = "../IMG/Dislike_1.png";
        const IMG_DISLIKE_REEMPLAZO = "../IMG/Dislike_2.png";
        like_2.addEventListener('click', () => {
            click++;

            if (click === 1) {
                img_2.src = IMG_DISLIKE_REEMPLAZO;
            } else if (click === 2) {
                img_2.src = IMG_DISLIKE_ORIGINAL;
            }

            if (click >= 2) {
                click = 0;
            }

            estado_Dislike = true;
        });
    }
}

window.addEventListener("load", () => {
    if (!main) return;

    crearHtmlProducto();
    autoScroll();
    cambiarContenidoAutomatico();
});

console.log("FAMSDAM Ing Co Ltd is a version web v1.0.0");
