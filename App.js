require("dotenv").config()
const express = require("express")
const { mailOptions, transporter } = require("./assets/emailConfig")

const app = express()

setTimeout(() => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Email sent:', info.response);
  });
}, 100);

// extra packages
app.use(express.json());

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error)
  }
};

start()
