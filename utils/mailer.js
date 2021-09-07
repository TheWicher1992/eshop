
const nodemailer = require('nodemailer')


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
})


const sendMail = (address, message = '') => {
  const src = 'https://tribune-reloaded.s3.amazonaws.com/media/images/1994171-herapheri_bollywoodlife-1560758544/1994171-herapheri_bollywoodlife-1560758544.jpg'
  const mailOptions = {
    from: 'sameer.nadeem24@gmail.com',
    to: address,
    subject: 'Welcome to Eshop, by Witcher.',
    html: `<img src=${src}>`,
    text: message
  }
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  })

}


module.exports = sendMail
