function registrarUsuario(){
    var cedula =$('#txtCedula').val();
    var nombre=$('#txtNombre').val();
    var apellido=$('#txtApellido').val();
    var Tipo_Usuario=$('#txtTipo_Usuario').val();
    var usuario=$('#txtUsuario').val();
    var email=$('#txtEmail').val();
    var contrasena=$('#txtContrasena').val();
    
    var url = "http://localhost/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/controller/insertarUsuarios.php"

$.ajax({
    type:"POST",
    url: url,
    data: {'cedula':cedula,'nombre':nombre,'apellido':apellido,'Tipo_Usuario':Tipo_Usuario,'usuario':usuario,
    'email':email,'contrasena':contrasena},
    success: function (response)
    {
        if(response=='registrado'){
            $('anymodal').modal('show');  
            console.log(response) 
            alert('registrado con exito');       
        }else{
            console.log(response)
             alert('Error de registro');
    }
    }
    
})
}