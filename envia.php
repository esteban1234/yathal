<?php
//Librerías para el envío de mail
require('phpmailer/phpmailer/class.phpmailer.php');

//PHPMailer Object
$mail = new PHPMailer();

// Recoger los valores del Formulario

$nombre = $_POST['txtNOMBRE'];
$telefono = $_POST['txtTELEFONO'];
$correo = $_POST['txtCORREO'];
$comentario = $_POST['txtCOMENTARIO'];

// if (filter_var($, FILTER_VALIDATE_EMAIL)) {
//     echo "Esta dirección de correo ($email_a) es válida.";
// }

$mail->CharSet = 'utf-8';
//From email address and name
$mail->From = $correo;
$mail->FromName = $nombre;

//To address and name
$mail->addAddress("info@comercializadorayathal.com");


$mail->isHTML(true);

$mail->Subject = "Cotización YATHAL";
$mail->Body = "
              <b>Telefono: </b>.$telefono.<br/>
              <b>Comentario: </b>.$comentario.<br/>";
// $mail->AltBody = "This is the plain text version of the email content";

if(!$mail->send())
{

  $html = '<div class="alert alert-dismissible alert-danger">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Error</strong> al enviar los datos.
                </div>';
	// $html = 2;

}
else
{

 $html = '<div class="alert alert-dismissible alert-success">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Datos</strong> Enviados Correctamente.
                </div>';

}

echo $html;

?>
