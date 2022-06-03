<?php
require_once $_SERVER['DOCUMENT_ROOT']."/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/db/db.php";
$cedula = $_POST['cedula'];
$Nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$Tipo_Usuario = $_POST['Tipo_Usuario'];
$usuario = $_POST['usuario'];
$email = $_POST['email'];
$contrasena = $_POST['contrasena'];

$obj=array(
    'cedula'=>$cedula,
    'nombre'=>$Nombre,
    'apellido'=>$apellido,
    'Tipo_Usuario'=>$Tipo_Usuario,
    'usuario'=>$usuario,
    'email'=>$email,
    'contrasena'=>$contrasena,
);
$insert=new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result=$manager->executeBulkWrite('TiendaOnline.persons',$insert);

if($result->getinsertedcount()==1){
    echo'Usuario registrado';
    }else{
    echo'error de Registro';
}