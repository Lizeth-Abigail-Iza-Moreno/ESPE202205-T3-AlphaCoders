<?php
require_once $_SERVER['DOCUMENT_ROOT']."/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/db/db.php";
$categoria = $_POST['categoria'];
$NombreProducto = $_POST['Nombre_Producto'];
$talla = $_POST['Talla'];
$precio = $_POST['Precio'];
$stock = $_POST['Stock'];

$obj=array(
    'categoria'=>$categoria,
    "Nombre_Producto"=>$NombreProducto,
    'Talla'=>$talla,
    'Precio'=>$precio,
    'Stock'=>$stock,
);
$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result=$manager->executeBulkWrite('TiendaOnline.productos',$insert);

if($result->getinsertedcount()==1){
    echo'Producto registrado';
    }else{
    echo'error de Registro';
}
