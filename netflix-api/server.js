const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
require("dotenv").config()

const app = express();
// Define allowed origins
const allowedOrigins = ['http://localhost:3000', 'https://netflix-mern-stack.vercel.app/'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow access
    } else {
      callback(new Error('Not allowed by CORS')); // Block access
    }
  },
  credentials: true, // Allow cookies or credentials
};

// Use CORS middleware
app.use(cors(corsOptions));

app.use(express.json());

mongoose
  .connect(process.env.DB_URL || "mongodb://127.0.0.1:27017/netflix")
  .then(() => {
    console.log("DB Connection Successfully completed");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

const port = process.env.PORT

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
