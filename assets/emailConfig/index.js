const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_NAME,
    pass: process.env.EMAIL_PASSWORD,
  },
})

const mailOptions = () => ({
  from: process.env.EMAIL_NAME,
  to: 'tariel.titirashvili@yahoo.com',
  subject: 'test',
  text: 'test email',
})

module.exports = {
  transporter,
  mailOptions
}