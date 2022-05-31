function registrarUsuario(){
    var cedula =$('#txtCedula').val();
    var nombre=$('#txtnombre').val();
    var apellido=$('#txtApellido').val;
    var usuario=$('#txtUsuario').val;
    var email=$('#txtEmail').val;
    var contrasena=$('#txtContrasena').val;
    var contrasena=$('#txtRepetirContrasena').val;
    
    var url="http://localhost/TiendaOnline/controller/insertarUsuarios.php"
}
$.ajax({
    type:"POST",
    url: url,
    data: ('cedula':cedula,'nombre':nombre,'apellido':apellido,'usuario':usuario,
    'email':email,'contrasena':contrasena);
    success: function (response)
    {
        if(response=='resgistado'){
            $('anymodal').modal('show');          
        }else{
        alert('error');
    }
    }
    
})