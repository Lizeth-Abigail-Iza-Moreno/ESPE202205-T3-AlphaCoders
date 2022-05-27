function resetearFormulario() {
    document.getElementById("formularioRegistro").reset();
    var avisoContrasena = document.getElementById("avisoContrasena");
    var btnEnviarDatos = document.getElementById("btnEnviarDatos");
    
    btnEnviarDatos.disabled = false;
    avisoContrasena.innerHTML = "-------";
    avisoContrasena.style.color = "black";
}

function coincidirContrasena() {

    var txtContrasena = document.getElementById("txtContrasena");
    var txtRepetirContrasena = document.getElementById("txtRepetirContrasena");
    var avisoContrasena = document.getElementById("avisoContrasena");
    var btnEnviarDatos = document.getElementById("btnEnviarDatos");

    btnEnviarDatos.disabled = true; //Boton en desactivado o apagado

    if (txtContrasena.value.length == 0 || txtRepetirContrasena.value.length == 0) {
        avisoContrasena.innerHTML = "No puede quedar vacio";
        avisoContrasena.style.color = "blue";
        btnEnviarDatos.disabled = true;

    } else if (txtContrasena.value != txtRepetirContrasena.value) {
        avisoContrasena.innerHTML = "Contraseñas no coinciden";
        avisoContrasena.style.color = "red";
        btnEnviarDatos.disabled = true;

    } else {
        avisoContrasena.innerHTML = "Las contraseñas coinciden";
        avisoContrasena.style.color = "green";
        btnEnviarDatos.disabled = false;
    }
}