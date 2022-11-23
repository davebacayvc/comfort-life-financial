import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import eventRoutes from "./routes/eventRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/events/", eventRoutes);
app.use("/api/users/", userRoutes);

/** Middleware */
app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
