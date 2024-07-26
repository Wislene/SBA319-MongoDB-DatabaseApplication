import express from "express";
import { getAllDanceClasses, createDanceClass, getDanceClassById, updateDanceClass, deleteDanceClass, renderNewDanceClassForm, renderEditDanceClassForm } from "../Controllers/classController.mjs";

const router = express.Router();



router.get("/", getAllDanceClasses);
router.post("/", createDanceClass);
router.get("/new", renderNewDanceClassForm);
router.get("/:id", getDanceClassById);
router.get("/:id/edit", renderEditDanceClassForm);
router.patch("/:id", updateDanceClass);
router.delete("/:id", deleteDanceClass);

export default router;




