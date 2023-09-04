const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default  sendEmail =  async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
  `;

  await mail.send({
    to: "arifmassih6@gmail.com",
    from: "arifmassih6@gmail.com",
    subject: "AhmadArif.com New Web Form Email!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });

  res.status(200).json({ status: "Form submitted" });
};
