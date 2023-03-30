const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser');
const cors = require("cors")

const app = express()

var nodemailer = require('nodemailer');



 

// Middlewares
app.use(cors());
app.use(bodyParser.json())

// Import Routes
const usersRoute = require('./routes/users')

app.use('/users', usersRoute)

// ROUTES
app.post('/sendEmail/', (req, res) => {
  console.log(req.body.users)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'arjunagnihotri14a@gmail.com',
          pass: process.env.PASSWORD || 'mqzgoozcnlowujqp'
        }
      });
      
      let body = JSON.stringify(req.body.users);

      var mailOptions = {
        from: 'arjunagnihotri14a@gmail.com',
        to: 'info@redpositive.in',
        subject: 'Sending Email using Node.js',
        text: body
      };

      
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
     res.send('SENT')
})

// Connect to DB
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
mongoose.connect('mongodb+srv://arjunagnihotri:anillusion@cluster0.lc7ulxl.mongodb.net/internshiptask', { useNewUrlParser: true })
.then(() => {
    console.log('connected to db')
})

app.listen(process.env.PORT || 5000)