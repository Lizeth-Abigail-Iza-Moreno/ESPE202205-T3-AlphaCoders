function eliminarProducto(id){
    var url="http://localhost/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/controller/eliminarProductos.php"
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