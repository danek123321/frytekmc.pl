<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Pobranie adresu e-mail z formularza
  $email = $_POST["email"];

  // Ustawienie odbiorcy i treści e-maila
  $to = "odbiorca@example.com"; // Wprowadź adres e-mail odbiorcy
  $subject = "Testowy e-mail";
  $message = "To jest testowy e-mail wysłany za pomocą PHP.";

  // Wysłanie e-maila
  $headers = "From: $email" . "\r\n";
  if (mail($to, $subject, $message, $headers)) {
    echo "E-mail został wysłany.";
  } else {
    echo "Błąd podczas wysyłania e-maila.";
  }
}
?>

