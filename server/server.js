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
  "https://iqraonline.vercel.app",   // Your deployed Frontend
  "https://iqraonlineltd.com",       // Your Custom Domain
  "https://www.iqraonlineltd.com",
  "http://localhost:3000",           // Default Next.js local port
  "https://iqraonline.onrender.com"  // Your Backend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// --- DATABASE CONNECTION ---
// Added options to prevent timeout issues on Render
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Wait 5 seconds before failing
    });
    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error("MongoDB Connection Error ❌:", err.message);
    // This will log the specific reason (auth, timeout, etc)
  }
};

connectDB();

// --- CONTACT FORM LOGIC ---
const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
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
    // Check if DB is actually connected before trying to save
    if (mongoose.connection.readyState !== 1) {
      throw new Error("Database not connected");
    }

    const newInquiry = new Inquiry({ name, email, service, message });
    await newInquiry.save();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      replyTo: email,
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
    res.status(200).json({ success: true, message: "Saved and Email Sent! ✅" });
  } catch (error) {
    console.error("Server Error:", error.message);
    res.status(500).json({ 
      success: false, 
      message: "Internal Server Error", 
      error: error.message 
    });
  }
});

// --- ROUTES ---
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Server is alive 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
