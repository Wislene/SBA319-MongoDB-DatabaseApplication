import express from "express";
import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from "../Controllers/userController.mjs";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;

