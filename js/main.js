//Array de los productos a incluir en la tienda, con los precios incluidos. 
const ProductosTienda = [{
    id: 1,
    nombre: 'One Piece',
    tomo: 'Tomo 1',
    genero: 'shonen',
    precio: 500,
    img: './multimedia/image/one-piece-tomo1.jpg'
  },
  {
    id: 2,
    nombre: 'One Piece',
    tomo: 'Tomo 2',
    genero: 'shonen',
    precio: 450,
    img: './multimedia/image/one-piece-tomo2.jpg'
  },
  {
    id: 3,
    nombre: 'Bleach',
    tomo: 'Tomo 1',
    genero: 'shonen',
    precio: 600,
    img: './multimedia/image/bleach-tomo1.jpg'
  },
  {
    id: 4,
    nombre: 'Bleach',
    tomo: 'Tomo 2',
    genero: 'shonen',
    precio: 500,
    img: './multimedia/image/bleach-tomo2.jpg'
  },
  {
    id: 5,
    nombre: 'Naruto',
    tomo: 'Tomo 1',
    genero: 'shonen',
    precio: 400,
    img: './multimedia/image/naruto-tomo1.jpg'
  },
  {
    id: 6,
    nombre: 'Naruto',
    tomo: 'Tomo 2',
    genero: 'shonen',
    precio: 450,
    img: './multimedia/image/naruto-tomo2.jpg'
  },
  {
    id: 7,
    nombre: 'Death Note',
    tomo: 'Tomo 1',
    genero: 'seinen',
    precio: 650,
    img: './multimedia/image/death-note-tomo1.jpg'
  },
  {
    id: 8,
    nombre: 'Death Note',
    tomo: 'Tomo 2',
    genero: 'seinen',
    precio: 600,
    img: './multimedia/image/death-note-tomo2.jpg'
  },
];

let carritoDeCompras = [];

const stock = document.getElementById('stock');
const contenedorCarrito = document.getElementById('carritoModal');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const filtro = document.getElementById('filtro');




Productos = (array) => {

  stock.innerHTML = '';
  array.forEach(element => {
    let article = document.createElement('article');
    article.classList.add('mangas');
    article.innerHTML += `
        <div class="card m-2" style="width: 18rem;">
        <img src=${element.img} class="card-img-top" alt="...">
        <div class="card-body">
          <button class="agregarCarrito d-flex ms-auto" id=agregar${element.id}>
            <img src="/multimedia/image/ingresocarrito.svg" alt="Carrito de compras">
          </button>
          <h5 class="card-title">${element.nombre}</h5>
          <p class="card-text">${element.tomo}</p>
          <p>Precio: $${element.precio}</p>
        </div>
      </div>
        `;
    stock.appendChild(article);

    let btnCards = document.getElementById(`agregar${element.id}`);

    btnCards.addEventListener('click', () => {
      Carrito(element.id)
    });

  });
}


Carrito = (id) => {

  let agregarUnidad = carritoDeCompras.find(element => element.id == id)


  if (agregarUnidad) {
    agregarUnidad.cantidad = agregarUnidad.cantidad + 1;
    document.getElementById(`unidad${agregarUnidad.id}`).innerHTML = ` <p id=unidad${agregarUnidad.id}>Unidad:${agregarUnidad.cantidad}</p>`;
    actualizarCarrito();
  } else {
    let carritoFinal = ProductosTienda.find(item => item.id == id);

    carritoFinal.cantidad = 1;
    carritoDeCompras.push(carritoFinal);
    actualizarCarrito();
    mostrarCarrito(carritoFinal);
  };
}




mostrarCarrito = (carritoFinal) => {


  let div = document.createElement('div')
  div.className = 'muestraCarrito';
  div.innerHTML = `
                <p>${carritoFinal.nombre} </p>
                <p>${carritoFinal.tomo} </p>
                <p>Precio: $${carritoFinal.precio} </p>
                <p id="unidad${carritoFinal.id}">Unidad: ${carritoFinal.cantidad} </p>
                <button id="delete${carritoFinal.id}" class="boton-eliminar ms-auto d-flex"><img src="/multimedia/image/trash3.svg"></button> 
                `;
  contenedorCarrito.appendChild(div);

  let btnDelete = document.getElementById(`delete${carritoFinal.id}`)

  btnDelete.addEventListener('click', () => {
    if (carritoFinal.cantidad == 1) {
      btnDelete.parentElement.remove();
      carritoDeCompras = carritoDeCompras.filter(item => item.id != carritoFinal.id);
      actualizarCarrito();
      localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
    } else {
      carritoFinal.cantidad = carritoFinal.cantidad - 1;
      document.getElementById(`unidad${carritoFinal.id}`).innerHTML = ` <p id=unidad${carritoFinal.id}>Unidad:${carritoFinal.cantidad}</p>`;
      actualizarCarrito();
      localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
    }


  });

}

actualizarCarrito = () => {
  contadorCarrito.innerText = carritoDeCompras.reduce((agg, el) => agg + el.cantidad, 0);
  precioTotal.innerText = carritoDeCompras.reduce((agg, el) => agg + (el.precio * el.cantidad), 0);

}

recuperar = () => {
  let recuperarLocalStorage = JSON.parse(localStorage.getItem('carrito'));

  if (recuperarLocalStorage) {
    recuperarLocalStorage.forEach(el => {
      mostrarCarrito(el)
      carritoDeCompras.push(el)
      actualizarCarrito()
    })
  }

}


Productos(ProductosTienda);
filtro.addEventListener('change', () => {
  if (filtro.value == 'todos') {
    Productos(ProductosTienda)
  } else {
    Productos(ProductosTienda.filter(elemento => elemento.genero == filtro.value))
  }
})
recuperar();