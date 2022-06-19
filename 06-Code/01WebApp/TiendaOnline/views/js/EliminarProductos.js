function eliminarProducto(id){
    var url="/ESPE202205-T3-AlphaCoders/06-Code/01WebApp/TiendaOnline/controller/eliminarProductos.php"
if(confirm("Seguro que desea eliminar este producto?")){
    $.ajax({
        type:"POST",
        url:url,
        data: {'id': id},
        success: function (response)
        {
            alert(response);
            location.reload(true);
            
        }
    })
}

}