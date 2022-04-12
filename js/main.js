//Array de datos de un usuario, con una funcion donde no puede salir a menos que ingrese datos correctos.
let precioTotal = 0;
const ValidarUsuario = [];
class DatosUsuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.validarNombre = function () {
            if (this.nombre === '' || this.apellido === null) {
                alert('Creo que se olvido ingresar el nombre:')
                while (this.nombre === '') {
                    this.nombre = prompt('Ingrese un nombre: ');
                }
            }
        }
        this.validarApellido = function () {
            if (this.apellido === '' || this.apellido === null) {
                alert('Creo que se olvido ingresar el apellido:')
                while (this.apellido === '') {
                    this.apellido = prompt('Ingrese un apellido: ');
                }
            }
        }
    }
}

const busquedaUsuario = [];
//Array de los productos a incluir en la tienda, con los precios incluidos. 
class ProductosManga {
    constructor(manga, tomo, genero, precio) {
        this.manga = manga;
        this.tomo = tomo;
        this.genero = genero;
        this.precio = precio;
    }
}
//Ingreso de los objetos de la tienda
const OnePiece1 = new ProductosManga('ONE PIECE', 'TOMO 1', 'SHONEN', 500);
const OnePiece2 = new ProductosManga('ONE PIECE', 'TOMO 2', 'SHONEN', 450);
const Bleach1 = new ProductosManga('BLEACH', 'TOMO 1', 'SHONEN', 600);
const Bleach2 = new ProductosManga('BLEACH', 'TOMO 2', 'SHONEN', 500);
const Naruto1 = new ProductosManga('NARUTO', 'TOMO 1', 'SHONEN', 400);
const Naruto2 = new ProductosManga('NARUTO', 'TOMO 2', 'SHONEN', 450);
const DeathNote1 = new ProductosManga('DEATH NOTE', 'TOMO 1', 'SEINEN', 650);
const DeathNote2 = new ProductosManga('DEATH NOTE', 'TOMO 2', 'SEINEN', 600);

const ProductosTienda = [OnePiece1, OnePiece2, Bleach1, Bleach2, Naruto1, Naruto2, DeathNote1, DeathNote2];



let aviso = document.querySelector(".aviso");


const IngresoDatos = () => {

    //Ingreso de los datos de nombre y apellido de usuario
    let nombreUsuario = prompt('Ingresar un nombre:');
    let apellidoUsuario = prompt('Ingresar un apellido:');

    const NuevoUsuario = new DatosUsuario(nombreUsuario, apellidoUsuario);

    ValidarUsuario.push(NuevoUsuario);
    NuevoUsuario.validarNombre();
    NuevoUsuario.validarApellido();
    
    for (let nomb of ValidarUsuario) {
        aviso.innerHTML = `<h1>Bienvenido ${nomb.nombre} ${nomb.apellido}</h1>`;
    }
};


carritoCompra = () => {

        alert('Los mangas que tenemos son:\nOne Piece\nBleach\nNaruto\nDeath Note')
        let nombreManga = prompt('Escoger el nombre del manga');
        let filtro = ProductosTienda.filter(
            item => item.manga.includes(nombreManga.toUpperCase())
        );
        
        if(nombreManga.toUpperCase() === 'ONE PIECE' || nombreManga.toUpperCase() === 'BLEACH' || nombreManga.toUpperCase() === 'NARUTO' || nombreManga.toUpperCase() === 'DEATH NOTE'){
            let tomo = '';  
            for (let element of filtro) {
                tomo += `${element.tomo} $${element.precio}\n`;  
            };
            
            alert(`Tenemos disponible:\n${tomo}`);
            let escogerTomo = prompt('Escoja entre Tomo 1 o Tomo 2');
            if(escogerTomo.toUpperCase() === 'TOMO 1' || escogerTomo.toUpperCase() === 'TOMO 2'){
                
                for (let element of filtro) {
                    if(escogerTomo.toUpperCase() === element.tomo){
                        alert(`Escogio ${element.manga} ${element.tomo}`)
                        precioTotal += precioTotal + element.precio;
                        alert('Precio total: ' + precioTotal);
                    }
                }
            } else {
                alert('No se encuentra este parametro')
                
            }
            
        }else{
        alert('No se encuentra este parametro');
        }

}

muestraDeProductos = () => {
    alert('Escoja el manga que mas le interese');
    let autorizacion = true;

    while (autorizacion === true) {
    carritoCompra();
    let confirmar = confirm('Desea continuar?');
    if (confirmar !== true) {
        autorizacion = false;
    }


            }
}

    // let mangaVista = prompt(`Escoja el manga que desee: \n${productos}`);
    // while (mangaVista !== 'ESC') {
    //     mangaVista = prompt(`Que producto llevara?\n${productos}`);
    // }
    // return mangaVista;





// alert('Estos son los mangas que tenemos en este momento');
// for (let element of ProductosTienda) {
//     console.log(element.manga + ' ' + element.tomo + ' ' + '$' + element.precio)
// }



// let stockObjeto = false;
// let precioTotal = 0;
// alert('Para terminar la compra, escriba ESC')
// let salir = prompt('¿Quiere continuar con la compra?');


// //Bucle del carrito de compras






// while (salir.toUpperCase() !== 'ESC') {

//             let filtradoGenero = prompt('Si quieres filtrar por genero, escriba "Shonen" o "Seinen"');

//             const filtroTomo = ProductosTienda.filter(
//                 (element) => element.genero === filtradoGenero);




//     for (let element of ProductosTienda) {
//             stockObjeto = true;

//     }
//     if (stockObjeto === true) {

//         alert('Escogiste ' + mangaCarrito);


//         alert('De este manga tenemos dos tomos');   
//         tomoCarrito = prompt('¿Que tomo quiere comprar?');
//         while (tomoCarrito.toUpperCase() != 'ESC') {
//             for (let element of ProductosTienda) {
//                 if (tomoCarrito.toUpperCase() == element.tomo && mangaCarrito.toUpperCase() == element.manga) {
//                     element.precioTomo();
//                     precioTotal = precioTotal + element.precio;
//                     console.log('Precio total: ' + precioTotal);
//                 }
//             }
//             alert('Para salir, escriba ESC');
//             tomoCarrito = prompt('¿Que tomo quiere comprar?');
//         }
//     } else {
//         alert('Este manga no lo tenemos');
//         alert('Para salir presiona ESC')
//     }
//     salir = prompt('¿Que manga quiere comprar?');
//     if(salir.toUpperCase() !== 'ESC'){
//         stockObjeto = false;
//     }
// }


// alert('El precio final de su compra es: ' + precioTotal);

IngresoDatos();

productoElegido = muestraDeProductos();