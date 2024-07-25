import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';

import path from "path";
import { fileURLToPath } from "url";
import DanceClass from "./Models/DanceClassModel"
import Users from "./Models/UserModel"
import methodOverride from "method-override";
import ConnectDB from "./db/conn.mjs"

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost/blog", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


// connect to Mongoose
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true


// Filename and --dirname

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//  Routes
app.use("./Routes/UsersRoutes.js);
app.use("./Routes/DanceClassRoutes.js");


import UserRoutes from "Routes/UsersRoutes.js";
import DanceClassRoutes from "Routes/DanceClassRoutes.js";

// app.use("/users", userRoutes);
app.use("/danceClasses", danceClassRoutes);

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
