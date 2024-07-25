import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from 'url';
import methodOverride from "method-override";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Filename and --dirname

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//  Routes
app.use('/users', userRoutes);
import UserRoutes from "Routes/UsersRoutes.js";
import DanceClassRoutes from "Routes/DanceClassRoutes.js";

app.use("/users", userRoutes);
app.use("/danceClasses", danceClassRoutes);

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
