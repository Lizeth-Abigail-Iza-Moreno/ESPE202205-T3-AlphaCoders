function validarUsuario(){
    var usuario=$('#txtUsuario').val();
    var contrasena=$('#txtContrasena').val();
     

$.ajax({
    type:"POST",
    url: "http://localhost/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/controller/validarUsuario.php",
    data: {'usuario':usuario,'contrasena':contrasena},
    success: function (response)
    {
       console.log(response);
        if(response!=1){
           alert('error')     
           
        }else{
           alert('Welcome')
           window.location="http://localhost/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/views/principal.php";
     
    }
    }
    
})
}