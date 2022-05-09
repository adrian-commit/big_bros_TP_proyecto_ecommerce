//--ELEMENTOS--//
const contenedorCarritoDeCompras = document.querySelector('.detalle');

const botonesAñadirCarrito = document.querySelectorAll('.agregarCarrito');
botonesAñadirCarrito.forEach((botonAc) => {
    botonAc.addEventListener('click', agregarCarritoClicked);
});

//--FUNCIONES--//
function agregarCarritoClicked(evento) {
    let carrito = document.querySelector('.carrito').style.display = 'block';
   const boton = evento.target ;
   const item = boton.closest('.item');

   const itemTitulo = item.querySelector('.item-titulo').textContent;
   const itemPrecio = item.querySelector('.item-precio').textContent;
   const itemCantidad = item.querySelector('.item-cantidad').textContent;

   añadirItemsAlCarritoDeCompras(itemTitulo,itemPrecio,itemCantidad);
}

function añadirItemsAlCarritoDeCompras(itemTitulo,itemPrecio,itemCantidad) {
    const elementoCarrito = document.createElement('li')
    const contenidoDetalleCarritoDeCompras = ` 
    <li class="items"><span class="nombre">${itemTitulo}</span>
    <span class="cantidad">${itemCantidad}</span>
    <span class="precio">${itemPrecio}</span></li>
    `
    elementoCarrito.innerHTML = contenidoDetalleCarritoDeCompras;
    contenedorCarritoDeCompras.append(elementoCarrito);
   
    actualizarTotalPrecio()
}

function actualizarTotalPrecio() {
    let total = 0;
    let totalCarrito = document.querySelector('.precioTotal');
    let itemsCarrito = document.querySelectorAll('span .items');
    console.log(itemsCarrito);
    
    itemsCarrito.forEach( item => {
       let elementoPrecio = item.querySelector('.precio');
    });
    console.log(elementoPrecio);
}

