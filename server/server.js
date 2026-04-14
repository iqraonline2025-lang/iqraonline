import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();

const app = express();

// --- FIXED CORS CONFIGURATION ---
const allowedOrigins = [
  "https://iqraonline.vercel.app",   // Vercel Frontend
  "https://iqraonlineltd.com",       // Custom Domain
  "https://www.iqraonlineltd.com",   // Custom Domain (with www)
  "https://iqraonline.onrender.com"  // Backend Self-reference
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

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
      from: process.env.GMAIL_USER, // Gmail requires the 'from' to be the authenticated user
      replyTo: email,               // This allows you to hit 'Reply' to the sender
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
    console.error("Mail Error:", error);
    res.status(500).json({ success: false, message: "Error processing request ❌" });
  }
});

// --- PROJECT ROUTES ---
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Server + Projects API working 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
