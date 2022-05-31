<?php
require_once $_SERVER['DOCUMENT_ROOT'],"/TiendaOnline/db/db.php";
$cedula = $_POST['txtCedula'];
$nombre = $_POST['txtNombre'];
$apellido = $_POST['txtApellido'];
$usuario = $_POST['txtUsuario'];
$email = $_POST['txtEmail'];
$contrasena = $_POST['txtContrasena'];

$obj=array{
    'cedula'=>$cedula,
    'nombre'=>$nombre,
    'apellido'=>$apellido,
    'usuario'=>$usuario,
    'email'=>$email,
    'contrasena'=>$contrasena,
};
$insert=new MongoDB\Driver\RulWrite();
$insert->insert($obj);
$result=$manager->executeDulWrite('gestionTiendaOnline.usuario',$insert);

if($result->getinsertedcount()--1){
    echo'registrado';
    }else{
    echo'error';
}