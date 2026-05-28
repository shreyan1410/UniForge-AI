const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const userRoutes = require("./routes/userRoutes");

const resumeRoutes = require("./routes/resumeRoutes");

const aiRoutes = require("./routes/aiRoutes");

const app = express();


// Connect MongoDB
connectDB();


// Middleware
app.use(cors());

app.use(express.json());

app.use("/uploads", express.static("uploads"));


// Test Route
app.get("/", (req, res) => {

    res.send("UniForge AI Backend Running");

});


// Routes
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/resume", resumeRoutes);

app.use("/api/ai", aiRoutes);


// Port
const PORT = process.env.PORT || 5000;


// Start Server
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});