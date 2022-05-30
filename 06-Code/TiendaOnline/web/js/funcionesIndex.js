function cargarElementoDinamicamente(url, elemento){
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    elemento.innerHTML = request.responseText;
}

function cargarRegistrarUsuario(){
    cargarElementoDinamicamente("registrarUsuario.jsp", document.getElementById("contenidoDinamico"));
}

function cargarLogin(){
    cargarElementoDinamicamente("login.jsp", document.getElementById("contenidoDinamico"));
}

function cargarTipo(){
     cargarElementoDinamicamente("AgregarProducto.jsp", document.getElementById("contenidoDinamico"));
}