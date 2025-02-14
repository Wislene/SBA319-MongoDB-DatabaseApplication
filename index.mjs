import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from 'body-parser';
import pug from "pug";
import morgan from "morgan";
import cors from "cors";

// import db from './config/db.mjs';
import methodOverride from "method-override";
import errorHandler from "./Middlewares/errorHandler.js";
import logRequests from "./Middlewares/errorHandler.js";
import seedRoutes from "./routes/seedRoutes.mjs";
import dancersRoutes from "./Routes/dancersRoutes.mjs";
import classRoutes from "./Routes/classRoutes.mjs";

const app = express();

const router = express.Router();

import path from "path";
import { fileURLToPath } from "url";

app.use(express.json());

// connect to Mongoose/MongoDB
mongoose
  .connect(process.env.ATLAS_URI, {
    // useNewUrlParser: true, -I removed because it says that this is a deprecated feature in the terminal when I ran the code.
    // useUnifiedTopology: true, -I removed because it says that this is a deprecated feature in the terminal when I ran the code.
  })
  .then((con) => {
    console.log(con.connection)
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Filename and --dirname

const _filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname("./index.mjs");

// Error handling for JSON parsing
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error("Bad JSON");
    return res
      .status(400)
      .send({ status: 400, message: "JSON Parsing Not Working" });
  }
  next();
});

// Middleware

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "pug");
app.set("views", "./Views");
app.set("views", path.join(__dirname, "views"));
app.use(errorHandler);
app.use(logRequests);
app.use(cors());

//Using Morgan for logging requests
app.use(morgan("dev"));

//  Routes

app.use("/dancers", dancersRoutes);
app.use("/class", classRoutes);
app.use("/seed", seedRoutes);


app.get("/", (req, res) => {
  res.render("index");
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
