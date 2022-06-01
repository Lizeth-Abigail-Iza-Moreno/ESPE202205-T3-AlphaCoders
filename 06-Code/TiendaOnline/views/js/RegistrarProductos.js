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
    data: {'categoria': categoria,'Nombre_Producto':Nombre_Producto,'Talla':Talla,'Precio':Precio,'Stock':Stock},
    success: function (response)
    {
        if(response=='registrado'){
            $('anymodal').modal('show');          
        }else{
        alert('Error en el Registro');
    }
    }
})