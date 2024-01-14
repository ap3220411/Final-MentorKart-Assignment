const nodemailer = require("nodemailer");
const Contact = require("../modals/sendEmail");

const submitContactForm = async (req, res) => {
  const { receiver, subject, message } = req.body;

  const sender = process.env.EMAIL;

  if (!receiver || !subject || !message) {
    return res.status(400).json({ success: false, message: "Invalid Data" });
  }

  try {
   await Contact.create({
      sender,
      receiver,
      subject,
      message,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass:  process.env.PASSWORD,
      },
    });

    const mailDetails = {
      from: process.env.EMAIL,
      to: receiver,
      subject: subject,
      text: message,
    };

    await transporter.sendMail(mailDetails);

    return res
      .status(200)
      .json({ success: true, message: "Mail Sent successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = { submitContactForm };
