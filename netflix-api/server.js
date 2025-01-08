const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
require("dotenv").config()

const app = express();

app.use(cors({origin:'https://netflix-mern-stack.vercel.app/'}));

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

app.get('/hi',(req,res)=>{
  res.json("hi from backend")
})

const port = process.env.PORT

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
