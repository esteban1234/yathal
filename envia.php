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
              <!DOCTYPE html>
                <html>
                <head>
                <title>Yathal</title>
                </head>
                <body  style='border:.5px solid rgba('0,0,0,0.8');background:#fff'>                
                <h1 style='text-align:center;  font-weight: bold'>YATHAL</h1>
                <b>Telefono: </b>$telefono<br/>
                <div style='color:#747474; padding:20px 10px; text-align: justify'>$comentario <div><br/>

                </body>
                </html>";
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
