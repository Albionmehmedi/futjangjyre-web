const express = require("express");
const cors = require("cors");
const fs = require("fs");

require("dotenv").config();

const app = express(); 
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use("/api/contact", require("./routes/contact.cjs"));
app.use("/api/blog", require("./routes/blog.cjs"));



console.log("Server is running...")
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
console.log(process.env.EMAIL_USER);