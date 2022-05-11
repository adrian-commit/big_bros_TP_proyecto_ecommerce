//-- ELEMENTOS --//
let botonMenu = document.querySelector('.menu');
let menuCompleto = document.querySelector('.menuDesplegable');
let botonCerrarMenu = document.querySelector('.seguir');
let verDetalle = document.querySelector('.verDetalle');
let listaDetalle = document.querySelector('.detalle');
let envio = document.querySelector('.envio');
let botonEnviar = document.querySelector('.opcionEnviar');
let botonRetirar = document.querySelector('.opcionRetirar');
let formRetirar = document.querySelector('.retirar');
let formEnviar = document.querySelector('.enviar');

//---FUNCIONES --//

const abrirMenu = botonMenu.addEventListener('click', () => {
    menuCompleto.style.display = 'block';
    let cambiarMenu = document.querySelector('.nombreMenu');
    cambiarMenu.innerHTML = '<a class="whap" href="https://api.whatsapp.com/send/?phone=5493624743819&text=Hola%2C+quisiera+hacer+un+pedido.%0A%0AID:+22">Enviar a whatsaap</a>';
    botonMenu.style.backgroundColor = 'green';
}) 
const cerrarMenu = botonCerrarMenu.addEventListener('click', () => {
    menuCompleto.style.display = 'none';
    let cambiarMenu = document.querySelector('.nombreMenu');
    cambiarMenu.innerHTML = '<p class="nombreMenu">Siguiente</p>';
    botonMenu.style.backgroundColor = 'white';
})

const Detalle = verDetalle.addEventListener('click', () => {
    if (listaDetalle.style.display == 'none') {
        listaDetalle.style.display = 'block';
        envio.style.display = 'none';
    } else {
        listaDetalle.style.display = 'none'
        envio.style.display = 'block';
    }
});

const enviar = botonEnviar.addEventListener('click', () => {
        formRetirar.style.display = 'none';
        formEnviar.style.display = 'block';
});

const retirar = botonRetirar.addEventListener('click', () => {
    if ( formEnviar.style.display != 'none') {
        formEnviar.style.display = 'none';
        formRetirar.style.display = 'block';
    }
});




