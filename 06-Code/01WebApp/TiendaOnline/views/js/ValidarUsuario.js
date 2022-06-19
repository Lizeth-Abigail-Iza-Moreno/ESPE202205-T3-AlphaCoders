function validarUsuario(){
    var usuario=$('#txtUsuario').val();
    var contrasena=$('#txtContrasena').val();
     

$.ajax({
    type:"POST",
    url: "/ESPE202205-T3-AlphaCoders/06-Code/01WebApp/TiendaOnline/controller/validarUsuario.php",
    data: {'usuario':usuario,'contrasena':contrasena},
    success: function (response)
    {
       console.log(response);
        if(response!=1){
           alert('error')     
           
        }else{
           alert('Welcome')
           window.location="/ESPE202205-T3-AlphaCoders/06-Code/01WebApp/TiendaOnline/views/principal.php";
     
    }
    }
    
})
}