<?php
require_once $_SERVER['DOCUMENT_ROOT'],"/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/db/db.php";
$usuario = $_POST['txtUsuario'];
$contrasena = $_POST['txtContrasena'];
$query = new MongoDB\Driver\Query(array('usuario' =>'contrasena'=> $contrasena));


$cursor =$manager ->executeQuery("gestionTiendaOnline.usuario",$query);

$result=$cursor->toArray();

$result = count("$users");
if($result !=0){
    header("location:http://localhost/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/views/principal.php",TRUE,301);
}else{
    echo "El usuario ingresado no existe";
    header("location:http://ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/",TRUE,301);
    exit();
}
?>
