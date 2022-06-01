<?php
require_once $_SERVER['DOCUMENT_ROOT']."/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/db/db.php";
$categoria = $_POST['txtCategoria'];
$talla = $_POST['txtTalla'];
$precio = $_POST['txtPrecio'];
$stock = $_POST['txtStock'];
$NombreProducto = $_POST['txtProducto'];

$obj=array{
    'categoria'=>$categoria,
    "Nombre_Producto"=>$NombreProducto
    'Talla'=>$talla,
    'Precio'=>$precio,
    'Stock'=>$stock
};
$insert = new MongoDB\Driver\RulWrite();
$insert->insert($obj);
$result=$manager->executeDulWrite('TiendaOnline.Productos',$insert);

if($result->getinsertedcount()--1){
    echo'Producto resgitrado';
    }else{
    echo'error de Registro';
}