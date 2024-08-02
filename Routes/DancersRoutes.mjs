

import express from "express";
import {
  getAllDancers,
  createDancer,
  getDancerById,
  updateDancer,
  deleteDancer
} from "../Controllers/dancerController.mjs";

const router = express.Router();

router.get("/", getAllDancers);
router.get('/new', (req, res) => res.render('newDancer'));
router.post("/", createDancer);
router.get('/:id/edit', (req, res) => res.render('editDancer', { id: req.params.id }));
router.patch("/:id", updateDancer);
router.delete("/:id", deleteDancer);

export default router;
