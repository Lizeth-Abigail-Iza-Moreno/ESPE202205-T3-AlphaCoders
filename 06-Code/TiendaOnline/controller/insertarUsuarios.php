<?php
require_once $_SERVER['DOCUMENT_ROOT']."/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/db/db.php";
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
    'contraseña'=>$contrasena,
};
$insert=new MongoDB\Driver\RulWrite();
$insert->insert($obj);
$result=$manager->executeRulWrite('TiendaOnline.persons',$insert);

if($result->getinsertedcount()--1){
    echo'Usuario registrado';
    }else{
    echo'error de Registro';
}