import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import projectRoutes from "./routes/projectRoutes.js"; // Import the project routes

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌:", err));

// --- CONTACT FORM LOGIC ---
const inquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, service, message } = req.body;
  try {
    const newInquiry = new Inquiry({ name, email, service, message });
    await newInquiry.save();

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New Request: ${service} from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #9333ea;">Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Saved to DB and Email Sent! ✅" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error processing request ❌" });
  }
});

// --- PROJECT ROUTES ---
// This connects the logic from your routes/projectRoutes.js file
// Your admin panel will call http://localhost:5000/api/projects
app.use("/api/projects", projectRoutes);


app.get("/", (req, res) => {
  res.send("Server + Projects API working 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});