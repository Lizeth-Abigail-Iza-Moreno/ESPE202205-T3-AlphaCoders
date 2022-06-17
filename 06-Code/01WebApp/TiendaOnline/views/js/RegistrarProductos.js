function registrarProducto(){
    var categoria =$('#txtCategoria').val();
    var NombreProducto =$('#txtProducto').val();
    var talla =$('#txtTalla').val();
    var precio =$('#txtPrecio').val();
    var stock =$('#txtStock').val();

    var url="http://localhost/ESPE202205-T3-AlphaCoders/06-Code/01WebApp/TiendaOnline/controller/insertarProductos.php"

$.ajax({
    type:"POST",
    url:url,
    data: {'categoria': categoria,'Nombre_Producto':NombreProducto,'Talla':talla,'Precio':precio,'Stock':stock},
    success: function (response)
    {
        alert(response);
        if(response=='registrado'){
            $('anymodal').modal('show');          
        }else{
        alert('Error en el Registro');
    }
    }
})
}

