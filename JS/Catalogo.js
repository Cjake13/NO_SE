const caja = document.getElementById("caja");
const estadoBoton = false;
function toggleIcono() {
    caja.classList.toggle("visible");
}


const caja_2 = document.getElementById("category");
const estadoBoton_2 = false;
function toggleIcono_2() {
    caja_2.classList.toggle("visible");
}

let contenedor_stars = document.getElementById("quiz_rate");
let estrella_vacia = "../IMG/favorito_1.png";
let estrella_normal = "../IMG/favorito_2.png";
let estrella_total = 5;
let contador_estrella = 0;


function crearStars() {
    let htmlEstrellas = '';
    
    for (let i = 1; i <= estrella_total; i++) {

        let generar_star = `
            <div class="star-icon star-icon" data-value="${i}">
                <img src="${estrella_vacia}" alt="Estrella" class="quiz_img_star">
            </div>
        `;
        htmlEstrellas += generar_star;
    }

    contenedor_stars.innerHTML = htmlEstrellas;
    contenedor_stars.addEventListener('click', manejarClicEstrella);
}

function manejarClicEstrella(event) {
    const estrellaClicada = event.target.closest('.star-icon'); 
    
    if (!estrellaClicada) return; 

    const valorClicado = parseInt(estrellaClicada.getAttribute('data-value'));
    contador_estrella = valorClicado;
    aplicarEstilosCalificacion(contador_estrella);
}

function aplicarEstilosCalificacion(rating) {
    const estrellas = document.querySelectorAll('.star-icon');
    
    estrellas.forEach(estrella => {
        const imgElement = estrella.querySelector('img');
        const valorEstrella = parseInt(estrella.getAttribute('data-value'));
        
        if (valorEstrella <= rating) {
            imgElement.src = estrella_normal;
        } else {
            imgElement.src = estrella_vacia;
        }
    });
}

document.addEventListener('DOMContentLoaded', crearStars);