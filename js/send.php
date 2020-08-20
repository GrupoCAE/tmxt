<?php 
error_reporting(0); 
$nombre = $_POST['nombre']; 

$mensaje="Mensaje del formulario de contacto de www.transportemextol.com";
$mensaje.= "\nNombre: ".$_POST['nombre'];
$mensaje.= "\nEmail: ".$_POST['mail'];
$mensaje.= "\nAsunto: ".$_POST['asunto'];
$mensaje.= "\nMensaje: \n".$_POST['mensaje'];
$remitente = $_POST['mail'];

$to = 'tonymacross@gmail.com'; 
$subject = $_POST['asunto']; 

mail($to, $subject, utf8_decode($mensaje),"FROM: $remitente");
?> 