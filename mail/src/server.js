
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can use any port you prefer

// Middleware to parse JSON data
app.use(bodyParser.json());

// Configure nodemailer with your email service provider's SMTP settings

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'vsushma725@gmail.com',
    pass: 'suhmas5145',
  },
});



// Route to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'vsushma79@gmail.com',
    to: 'sushma222444@gmail.com',
    subject: 'trail',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
