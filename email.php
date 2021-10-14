<?php
     use PHPMailer\PHPMailer\PHPMailer;
     require 'vendor/autoload.php';

     $jsondata = array();

     $nombres = $_POST['nombres'];
     $apellidos = $_POST['apellidos'];
     $celular = $_POST['celular'];
     $empresa = $_POST['empresa'];
     $ruc = $_POST['ruc'];
     $email = $_POST['email'];
     $_flat_term = $_POST['_flat_term'];
     $pageMessage = $_POST['pageMessage'];

     // Haciendo el cuerpo del mailing

     $html = "<p>Datos del Cliente:</p>";
     $html.= "<p><strong>".$pageMessage."</strong></p>";
     $html.= "<p>Nombres: ".$nombres."</p>";
     $html.= "<p>Apellidos: ".$apellidos."</p>";
     $html.= "<p>celular: ".$celular."</p>";
     $html.= "<p>Empresa: ".$empresa."</p>";
     $html.= "<p>RUC: ".$ruc."</p>";
     $html.= "<p>Email: ".$email."</p>";
     $html.= "<p>T&C: ".$_flat_term."</p>";


     $mail = new PHPMailer;
     $mail->isSMTP();
     $mail->SMTPDebug = 0;
     $mail->Host = 'mail.fizari.pe';
     $mail->Port = 465;
     $mail->SMTPAuth = true;
     $mail->SMTPSecure = 'ssl';
     $mail->Username = 'contactodev@fizari.pe';
     $mail->Password = '#qc+2q?P,m[]';
     $mail->setFrom('gerencia@fizari.pe', 'Gerencia');
     // $mail->addReplyTo('gerencia@fizari.pe', 'Gerencia');
     $mail->addAddress('carlos.espinoza24g@gmail.com', 'Kalin');
     $mail->addAddress('vicman.corzo@gmail.com', 'Victor');
     // $mail->addAddress('info@fizari.com', 'Ventas');
     $mail->isHTML(true);   
     $mail->Subject = 'Formulario Contacto ';
     // $mail->msgHTML(file_get_contents('message.html'), __DIR__);
     $mail->Body = $html;
     //$mail->addAttachment('test.txt');
     if (!$mail->send()) {
          // $mail->ErrorInfo
          $jsondata['success'] = $mail->ErrorInfo;
     } else {
          $jsondata['success'] = 'ok';
     }

     // header('Content-type: application/json; charset=utf-8');
     echo json_encode($jsondata);
     exit();
?>