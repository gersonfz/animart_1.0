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
}

if(edadUsuario < 18){
    alert("El ingreso es solo para mayores de edad");
}else{

let usuarioPassword = prompt("Ingrese una contraseña");
let passwordRepeat = prompt("Vuelva a ingresar una contraseña");
while (usuarioPassword != passwordRepeat){
    alert("Contraseñas no coinciden")
    passwordRepeat = prompt("Vuelva a ingresar una contraseña");
}

alert("Usuario ingresado correctamente");
alert("Bienvenido " + nombreUsuario + " " + apellidoUsuario);
}