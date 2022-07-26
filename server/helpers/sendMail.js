const nodemailer = require("nodemailer");

exports.sendResetPasswordEmail = (email, url) => {
  const emailMessage = `
    Hi! this is click the link to reset your password ${url}
    `;

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "RESET PASSWORD",
    text: emailMessage,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.status(400).json({
        success: false,
        message: "Email could not be sent. Please try again later.",
        error: err,
      });
    } else {
      res.status(200).json({ success: true, message: "Email sent." });
    }
  });
};
