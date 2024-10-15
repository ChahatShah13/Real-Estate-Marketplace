import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import authRouter from "./routes/auth.route.js";
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGOODB)
  .then(() =>
    app.listen(5000, () =>
      console.log("Conneted to Database and Surver is Running")
    )
  )
  .catch((error) => console.log(error));

  app.use('/api/auth',authRouter)

  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
