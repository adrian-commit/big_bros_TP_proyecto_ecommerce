let botonesAgregarAlCarrito = document.querySelectorAll('.agregarCarrito');
botonesAgregarAlCarrito.forEach(boton => {
    boton.addEventListener('click', agregarCarritoClicked);
});

function agregarCarritoClicked(evento) {
    const boton = evento.target;
    const item = boton.closest('.item');
    console.log(item);
}