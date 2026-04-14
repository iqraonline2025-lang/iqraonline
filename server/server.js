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
    // Allow requests with no origin (like mobile apps or curl) 
    // and check if origin includes 'vercel.app' for dynamic preview deployments
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
    // Note: Ensure your MONGO_URI in Render uses %40 instead of @ in the password
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, 
    });
    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error("MongoDB Connection Error ❌:", err.message);
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
    pass: process.env.GMAIL_PASS, // 16-character App Password
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, service, message } = req.body;

  try {
    // 1. Safety Check: Database
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, message: "Database is connecting, try again in 5 seconds." });
    }

    // 2. Save to Database
    const newInquiry = new Inquiry({ name, email, service, message });
    await newInquiry.save();

    // 3. Prepare Email
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

    // 4. Send Email
    await transporter.sendMail(mailOptions);
    
    // 5. Success Response
    return res.status(200).json({ success: true, message: "Saved and Email Sent! ✅" });

  } catch (error) {
    console.error("Server Error:", error.message);
    // Ensure we always return a response to stop the frontend loading spinner
    return res.status(500).json({ 
      success: false, 
      message: "Server error occurred", 
      error: error.message 
    });
  }
});

app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Server is alive 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
