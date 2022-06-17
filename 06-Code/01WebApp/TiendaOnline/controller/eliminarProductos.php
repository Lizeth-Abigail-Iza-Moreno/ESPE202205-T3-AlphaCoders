<?php
require_once $_SERVER['DOCUMENT_ROOT']."/ESPE202205-T3-AlphaCoders/06-Code/01WebApp/TiendaOnline/db/db.php";
$id = $_POST['id'];

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->delete(['_id' =>new MongoDB\BSON\ObjectID($id)],['limit' => 1]);
$result=$manager->executeBulkWrite('TiendaOnline.productos',$bulk);

if($result->getDeletedCount() === 1){
    echo'Producto eliminado';
    }else{
    echo'error de eliminacion';
}
