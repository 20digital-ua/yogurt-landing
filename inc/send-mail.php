<?php

$result;
if (isset($_POST["name"]) && $_POST["name"] != '' &&
  isset($_POST["email"]) && $_POST["email"] != '' &&
  isset($_POST["text"]) && $_POST["text"] != ''){

  $getData = array(
    'name' => $_POST["name"],
    'email'=>$_POST["email"],
    'text'=>$_POST["text"],
  );


  $to = 'antonfedorishko17@gmail.com';
  // $to = 'antonfedorishko17@gmail.com';
  $subject = 'Subscribe';
  $message = '
      <h3 style="font-weight:400">Hi, You have a Contact request from <strong>'.$getData['name'].'</strong></h3><br>
      <p>Detailes:</p>
      <p>Eamil: '.$getData['email'].'</p>
      <p>Text: '.$getData['text'].'</p>
      <br>
      <h4>Thank you!</h4>

  ';
  $headers  = 'MIME-Version: 1.0' ."\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $headers .= 'From: Lefly.com <Leafly@Leafly.com>' . "\r\n";

  $result = mail($to, $subject, $message, $headers);
}else{
  $result=false;
}

echo json_encode($result); 

?>