import express from "express";
import {
  getAllClasses,
  createClass,
  getClassById,
  updateClass,
  deleteClass,
  renderNewClassForm,
  renderEditClassForm
} from "../controllers/classController.mjs";

const router = express.Router();

router.get("/", getAllClasses);
router.post("/", createClass);
router.get("/new", renderNewClassForm);
router.get("/:id", getClassById);
router.get("/:id/edit", renderEditClassForm);
router.patch("/:id", updateClass);
router.delete("/:id", deleteClass);

export default router;






