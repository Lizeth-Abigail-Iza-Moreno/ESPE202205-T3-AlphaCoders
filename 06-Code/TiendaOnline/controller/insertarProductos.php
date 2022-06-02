<?php
require_once $_SERVER['DOCUMENT_ROOT']."/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/db/db.php";
$categoria = $_POST['categoria'];
$talla = $_POST['Talla'];
$precio = $_POST['Precio'];
$stock = $_POST['Stock'];
$NombreProducto = $_POST['Nombre_Producto'];

$obj=array(
    'categoria'=>$categoria,
    "Nombre_Producto"=>$NombreProducto,
    'Talla'=>$talla,
    'Precio'=>$precio,
    'Stock'=>$stock,
);
$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result=$manager->executeBulkWrite('TiendaOnline.Productos',$insert);

if($result->getinsertedcount()==1){
    echo'Producto resgitrado';
    }else{
    echo'error de Registro';
}