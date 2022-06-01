function registrarUsuario(){
    var cedula =$('#txtCedula').val();
    var nombre=$('#txtnombre').val();
    var apellido=$('#txtApellido').val;
    var usuario=$('#txtUsuario').val;
    var email=$('#txtEmail').val;
    var contrasena=$('#txtContrasena').val;
    
    var url="http://localhost/TiendaOnline/controller/insertarUsuarios.php"
}
$.ajax({
    type:"POST",
    url: url,
    data: {'cedula':cedula,'nombre':nombre,'apellido':apellido,'usuario':usuario,
    'email':email,'contraseña':contrasena},
    success: function (response)
    {
        if(response=='registrado'){
            $('anymodal').modal('show');          
        }else{
        alert('error');
    }
    }
    
})