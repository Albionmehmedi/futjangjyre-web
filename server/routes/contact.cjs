//Import Node modules
const express = require("express");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");
const router = express.Router();

// Path to the message file
const filePath = path.join(__dirname, "../data/message.json");

//Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Post route
router.post("/", async (req, res) => {
  console.log("BODY:", req.body);
  const { fname, lname, email, number, message } = req.body;

  //Form validation
  if (!fname || !lname || !email || !message || !number) {
    return res.status(400).json({ error: "All fiels are required" });
  }

  //Send email
  try {
    await transporter.sendMail({
      from: `"Website Contact" <your@gmail.com>`,
      to: "futjangjyre@gmail.com", 
      subject: `New message from ${fname} ${lname}`,
      text: `
  Name: ${fname} ${lname}
  Email: ${email}
  Number: ${number}
  Message:
  ${message}
    `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Email failed to send" });
  }

  //Save the message to file
  try {
    let messages = [];

    if (fs.existsSync(filePath)) {
      messages = JSON.parse(fs.readFileSync(filePath));
    }

    const newMessage = {
      id: Date.now().toString(),
      fname,
      lname,
      email,
      number,
      message,
      createdAt: new Date(),
    };

    messages.push(newMessage);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "info@futjangjyre.com",
        subject: "New Message",
        html: `<p>${message} & ${number}</p>`,
      });
    } catch (emailError) {
      console.log("Email failed:", emailError.message);
    }

    res.json({ success: true });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
