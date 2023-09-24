// const mail = require("@sendgrid/mail");

// mail.setApiKey(process.env.SENDGRID_API_KEY);

// export default  sendEmail =  async (req, res) => {
//   const body = JSON.parse(req.body);

//   const message = `
//     Name: ${body.name}\r\n
//     Email: ${body.email}\r\n
//     Subject: ${body.subject}\r\n
//     Message: ${body.message}
//   `;

//   await mail.send({
//     to: "arifmassih6@gmail.com",
//     from: "arifmassih6@gmail.com",
//     subject: "AhmadArif.com New Web Form Email!",
//     text: message,
//     html: message.replace(/\r\n/g, "<br>"),
//   });

//   res.status(200).json({ status: "Form submitted" });
// };
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  const data = JSON.parse(req.body);
  const message = `
    Name: ${data.name}\r\n
    Email: ${data.email}\r\n
    Subject: ${data.subject}\r\n
    Message: ${data.message}
  `;

  const msg = {
    to: "arifmassih6@gmail.com", // Change to your recipient
    from: "arifmassih6@gmail.com", // Change to your verified sender
    subject: "AhmadArif.com New Web Form Email!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };
  await sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.status(200).json({ success: true });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    });
}
