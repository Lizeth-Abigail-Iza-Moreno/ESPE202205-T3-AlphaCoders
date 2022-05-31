<?php
require_once $_SERVER['DOCUMENT_ROOT'],"/TiendaOnline/db/db.php";
$usuario = $_POST['txtUsuario'];
$contrasena = $_POST['txtContrasena'];
$query = new MongoDB\Driver\Query(array('usuario' =>'contrasena'=> $contrasena));


$cursor =$manager ->executeQuery("gestionTiendaOnline.usuario",$query);

$result=$cursor->toArray();

$result = count("$users");
if($result !=0){
    header("location:http://localhost/TiendaOnline/view/principal.php",TRUE,301);
}else{
    echo "El usuario ingresado no existe";
    header("location:http://localhost/TiendaOnline/",TRUE,301);
    exit();
}
?>