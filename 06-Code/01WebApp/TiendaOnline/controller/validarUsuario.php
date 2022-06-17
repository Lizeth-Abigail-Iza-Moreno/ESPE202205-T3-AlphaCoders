<?php
require_once $_SERVER['DOCUMENT_ROOT']."/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/db/db.php";
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];
$query = new MongoDB\Driver\Query(array('username' => $usuario, 'password'=> $contrasena));


$cursor =$manager ->executeQuery("TiendaOnline.users",$query);

$result=$cursor->toArray();

$result2 = count($result);

if($result2 !=0){
    echo 1;
}else{
   echo 2;
}
?>
