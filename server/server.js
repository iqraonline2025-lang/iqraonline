import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();

const app = express();

// --- CORS CONFIGURATION ---
const allowedOrigins = [
  "https://iqraonline.vercel.app",
  "https://iqraonlineltd.com",
  "https://www.iqraonlineltd.com",
  "http://localhost:3000",
  "https://iqraonline.onrender.com"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin) || origin.includes('vercel.app')) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use(express.json());

// --- DATABASE CONNECTION ---
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, 
    });
    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error("MongoDB Connection Error ❌:", err.message);
  }
};
connectDB();

// --- DATABASE SCHEMA ---
const Inquiry = mongoose.model("Inquiry", new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
}));

// --- NODEMAILER (FIXED FOR RENDER PORT 587) ---
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // MUST be false for 587
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, // 16-character App Password
  },
  tls: {
    rejectUnauthorized: false // Bypasses network blocks on Render
  }
});

// --- CONTACT ROUTE ---
app.post("/api/contact", async (req, res) => {
  const { name, email, service, message } = req.body;

  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, message: "DB Connecting..." });
    }

    // 1. Save to DB
    const newInquiry = new Inquiry({ name, email, service, message });
    await newInquiry.save();

    // 2. Send Email
    console.log("Attempting to send email..."); 
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Request: ${service} from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
    });
    console.log("Email Sent ✅");

    return res.status(200).json({ success: true, message: "Success!" });
  } catch (error) {
    console.error("Backend Error:", error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.use("/api/projects", projectRoutes);
app.get("/", (req, res) => res.send("Server is alive 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
