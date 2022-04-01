//Ingreso de datos de un usuario, mayor de edad, a la pagina. Con bucles, donde no puede salir a menos que ingrese datos correctos.

function validarNombre(nombre) {
    while (nombre === "") {
        nombre = prompt("Ingrese un valor real:");
    }
}

function validarUsuario(password) {
    let passwordRepeat;
    while (passwordRepeat != password) {
        passwordRepeat = prompt("Vuelva a ingresar la contrasenia: ");
    }
}

function validarEdad(edad) {
    while (edad == null || /\D/.test(edad) || edad == "") {
        edad = prompt("Ingrese un valor numerico: ");
    }
    if (edad < 18) {
        alert("El ingreso es solo para mayores de edad");
    } else {

        let usuarioPassword = prompt("Ingrese una contraseña");
        validarUsuario(usuarioPassword);

        alert("Bienvenido a la pagina");
    }
}

let nombreUsuario = prompt("Ingrese un nombre: ");
validarNombre(nombreUsuario);

let apellidoUsuario = prompt("Ingrese un apellido: ")
validarNombre(apellidoUsuario);

let edadUsuario = prompt("Ingrese su edad:");
validarEdad(edadUsuario);