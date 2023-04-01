const nodemailer = require("nodemailer");

const SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {
  let transporter = nodemailer.createTransport({
    host: "mail.ownfood.com",
    port: 587,
    secure: false,
    auth: {
      user: "info@ownfood.com",
      pass: "HD@OWNFOOD9900",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOption = {
    from: "OwnFood Management <info@ownfood.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transporter.sendMail(mailOption);
};

module.exports = SendEmailUtility;
