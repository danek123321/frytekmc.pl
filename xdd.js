const nodemailer = require('nodemailer');

// Konfiguracja transportera SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Możesz zmienić na inny dostawca SMTP lub podać dane dostępowe do serwera SMTP
  auth: {
    user: 'bot461635@gmail.com', // Wprowadź swój adres e-mail
    pass: 'danek_anonim', // Wprowadź hasło do konta e-mail
  },
});

// Definicja treści wiadomości e-mail
const mailOptions = {
  from: 'bot461635@gmail.com', // Wprowadź swój adres e-mail
  to: 'danielserwis99@gmail.com', // Wprowadź adres e-mail odbiorcy
  subject: 'Testowy e-mail',
  text: 'Witaj! To jest testowy e-mail wysłany przez Nodemailer.', // Tekst wiadomości
};

// Wysłanie e-maila
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Błąd podczas wysyłania e-maila:', error);
  } else {
    console.log('E-mail został wysłany:', info.response);
  }
});