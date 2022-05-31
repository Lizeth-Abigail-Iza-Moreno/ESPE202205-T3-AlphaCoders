function registrarUsuario(){
    var categoria =$('#txtCategoria').val();
    var NombreProducto=$('#txtProducto').val;
    var talla=$('#txtTalla').val();
    var precio=$('#txtPrecio').val;
    var stock=$('#txtstock').val;

    var url="http://localhost/TiendaOnline/controller/insertarProductos.php"
}
$.ajax({
    type:"POST",
    url:url,
    data: ('categoria': categoria,'NombreProducto':NombreProducto,'talla':talla,'precio':precio,'stock':stock,
    success: function (response)
    {
        if(response=='resgistado'){
            $('anymodal').modal('show');          
        }else{
        alert('Error en el Registro');
    }
    }
})