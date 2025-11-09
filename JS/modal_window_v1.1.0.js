let cerrar = document.querySelectorAll(".stj-close")[0];
let abrir = document.querySelectorAll(".stj-cta")[0];
let modal = document.querySelectorAll(".stj-modal")[0];
let modalC = document.querySelectorAll(".stj-modal-container")[0];

abrir.addEventListener("click", function (e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("stj-modal-close");
});

cerrar.addEventListener("click", function () {
    modal.classList.toggle("stj-modal-close");
    setTimeout(function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 1000)
})

window.addEventListener("click", function (e) {
    //console.log(e.target);
    if (e.target == modalC) {
        modal.classList.toggle("stj-modal-close");
        setTimeout(function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 900)
    }
})
