"use strict";
require('dotenv').config();
const nodemailer = require("nodemailer");


// async..await is not allowed in global scope, must use a wrapper
function main({email, text, link}) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
return new Promise((resolve, reject) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.ETHEREAL_HOST,
    port: process.env.ETHEREAL_POST,
    auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASS
    }
  });

    // send mail with defined transport object
    let info = ({
        from: 'grayson.murray@ethereal.email', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: text, // plain text body
        html: `<a>${link}</a>`, // html body
    });

    transporter.sendMail(info, (error, info) => {
        if(error){
            reject(error);
        } 
        resolve("sent");
    })
  })
  
}


module.exports = main;