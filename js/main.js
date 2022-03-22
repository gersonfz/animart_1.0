//Ingreso de datos de un usuario, mayor de edad, a la pagina. Con bucles, donde no puede salir a menos que ingrese datos correctos.
let nombreUsuario = (prompt ("Ingrese un nombre:"));
while (nombreUsuario === ""){
    nombreUsuario = prompt("Ingrese un nombre real:");
} 


let apellidoUsuario = (prompt ("Ingrese un apellido:"));
while (apellidoUsuario === ""){
    apellidoUsuario = prompt("Ingrese un apellido real:");
}
    alert("Hola " + nombreUsuario + " " + apellidoUsuario);

let edadUsuario = prompt("Ingrese su edad:");
while (edadUsuario == null || /\D/.test(edadUsuario) || edadUsuario == "") {
    edadUsuario = prompt("Ingrese un valor real: ");
} if(edadUsuario < 18){
    alert("El ingreso es solo para mayores de edad");
}

let usuarioPassword = prompt("Ingrese una contrasena");
let passwordRepeat = prompt("Vuelva a ingresar una contrasena");
while (usuarioPassword != passwordRepeat){
    passwordRepeat = prompt("Contrasenas no coinciden.");
}

alert("Usuario ingresado correctamente")
alert("Bienvenido " + nombreUsuario + " " + apellidoUsuario)