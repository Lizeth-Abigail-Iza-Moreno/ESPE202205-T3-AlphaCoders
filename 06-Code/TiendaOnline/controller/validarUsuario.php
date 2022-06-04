<?php
require_once $_SERVER['DOCUMENT_ROOT']."/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/db/db.php";
$usuario = $_POST['txtUsuario'];
$contrasena = $_POST['txtContrasena'];
$query = new MongoDB\Driver\Query(array('usuario' => $usuario, 'contrasena'=> $contrasena));


$cursor =$manager ->executeQuery("TiendaOnline.usuario",$query);

$result=$cursor->toArray();

$result2 = count($result);

if($result2 !=0){
    header("location:http://localhost/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/principal.php",TRUE,301);
}else{
    alert('El usuario ingresado no existe');
    header("location:http://localhost/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/",TRUE,301);
    exit();
}
?>
