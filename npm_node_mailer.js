var email = require('nodemailer');

var transporter = nodemailer.createTransport ({
  service: 'gmail',
  auth: {
    user: 'enter your valid email id',
    pass: 'Enter valid passwrd for above email id',	
  }
});

var mailOptions = {
  from: 'your email id',
  to: 'email id to whom you want to send email',
  subject: 'Sending test mail using node.js',
  html: '<h1>EMAIL</h1><p>It is so easy to send an email!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if(error) {
	console.log(error);
  }	
  else {
    console.log('Email Sent: ' + info.response);
  }
});

