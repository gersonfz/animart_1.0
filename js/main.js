//Array de datos de un usuario, con una funcion donde no puede salir a menos que ingrese datos correctos.

const ValidarUsuario = [];
class DatosUsuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.validarNombre = function () {
            if (this.nombre === '') {
                alert('Creo que se olvido ingresar el nombre:')
                while (this.nombre === '') {
                    this.nombre = prompt('Ingrese un nombre: ');
                }
            }
        }
        this.validarApellido = function () {
            if (this.apellido === '') {
                alert('Creo que se olvido ingresar el apellido:')
                while (this.apellido === '') {
                    this.apellido = prompt('Ingrese un apellido: ');
                }
            }
        }
    }
}


//Array de los productos a incluir en la tienda, con los precios incluidos. 
const ProductosTienda = [];
class Productos {
    constructor(manga, tomo, genero, precio) {
        this.manga = manga;
        this.tomo = tomo;
        this.genero = genero;
        this.precio = precio;
    }
    precioTomo() {
        alert(this.precio);
    }
}


//Ingreso de los datos de nombre y apellido de usuario
let nombreUsuario = prompt('Ingresar un nombre:');
let apellidoUsuario = prompt('Ingresar un apellido:');

const NuevoUsuario = new DatosUsuario(nombreUsuario, apellidoUsuario);

ValidarUsuario.push(NuevoUsuario);
NuevoUsuario.validarNombre();
NuevoUsuario.validarApellido();

for (let nomb of ValidarUsuario) {
    alert('Bienvenido ' + nomb.nombre + ' ' + nomb.apellido);
}


//Ingreso de los objetos de la tienda
const OnePiece1 = new Productos('ONE PIECE', 'TOMO 1', 'Shonen', 500);
ProductosTienda.push(OnePiece1)
const OnePiece2 = new Productos('ONE PIECE', 'TOMO 2', 'Shonen', 450);
ProductosTienda.push(OnePiece2)
const Bleach1 = new Productos('BLEACH', 'TOMO 1', 'Shonen', 600);
ProductosTienda.push(Bleach1)
const Bleach2 = new Productos('BLEACH', 'TOMO 2', 'Shonen', 500);
ProductosTienda.push(Bleach2)
const Naruto1 = new Productos('NARUTO', 'TOMO 1', 'Shonen', 400);
ProductosTienda.push(Naruto1)
const Naruto2 = new Productos('NARUTO', 'TOMO 2', 'Shonen', 450);
ProductosTienda.push(Naruto2)
const DeathNote1 = new Productos('DEATH NOTE', 'TOMO 1', 'Seinen', 650);
ProductosTienda.push(DeathNote1)
const DeathNote2 = new Productos('DEATH NOTE', 'TOMO 2', 'Seinen', 600);
ProductosTienda.push(DeathNote2)

alert('Estos son los mangas que tenemos en este momento');
for (let element of ProductosTienda) {
    console.log(element.manga + ' ' + element.tomo + ' ' + '$' + element.precio)
}

let stockObjeto = false;
let precioTotal = 0;
alert('Para terminar la compra, escriba ESC')
let mangaCarrito = prompt('¿Que manga quiere comprar?');


//Bucle del carrito de compras
while (mangaCarrito.toUpperCase() !== 'ESC') {
    for (let element of ProductosTienda) {
        if (mangaCarrito.toUpperCase() === element.manga) {
            stockObjeto = true;
        }
    }
    if (stockObjeto === true) {
        alert('Escogiste ' + mangaCarrito);
        alert('De este manga tenemos dos tomos');
        tomoCarrito = prompt('¿Que tomo quiere comprar?');
        while (tomoCarrito.toUpperCase() != 'ESC') {
            for (let element of ProductosTienda) {
                if (tomoCarrito.toUpperCase() == element.tomo && mangaCarrito.toUpperCase() == element.manga) {
                    element.precioTomo();
                    precioTotal = precioTotal + element.precio;
                    console.log('Precio total: ' + precioTotal);
                }
            }
            alert('Para salir, escriba ESC');
            tomoCarrito = prompt('¿Que tomo quiere comprar?');
        }
    } else {
        alert('Este manga no lo tenemos');
        alert('Para salir presiona ESC')
    }
    mangaCarrito = prompt('¿Que manga quiere comprar?');
    if(mangaCarrito.toUpperCase() !== 'ESC'){
        stockObjeto = false;
    }
}


alert('El precio final de su compra es: ' + precioTotal);