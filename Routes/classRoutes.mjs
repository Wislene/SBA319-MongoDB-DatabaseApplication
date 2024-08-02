import express from "express";
import {
  getAllClasses,
  createClass,
  getClassById,
  updateClass,
  deleteClass,
  renderNewClassForm,
  renderEditClassForm,
} from "../Controllers/classController.mjs";

const router = express.Router();

router.get('/:id/edit', renderEditClassForm);
router.get('/new', renderNewClassForm);
router.get("/", getAllClasses);
router.post("/", createClass);
router.get('/new', (req, res) => res.render('newClass'));
router.get("/:id", getClassById);
router.get('/:id/edit', (req, res) => res.render('editClass', { id: req.params.id }));
router.patch("/:id", updateClass);
router.delete("/:id", deleteClass);

export default router;






