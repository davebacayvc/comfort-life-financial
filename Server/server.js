import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import eventRoutes from "./routes/eventRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/events/", eventRoutes);
app.use("/api/users/", userRoutes);
app.use("/api/inquiries/", inquiryRoutes);
app.use("/api/contacts/", contactRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Web/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "Web", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

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
