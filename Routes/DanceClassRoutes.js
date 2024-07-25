import express from "express";

import danceClassController from "../Controllers/DanceClassController.mjs";

import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get('/', danceClassController.getAllDanceClasses);
router.post('/', danceClassController.createDanceClass);
router.get('/new', danceClassController.renderNewDanceClassForm);
router.get('/:id', danceClassController.getDanceClassById);
router.get('/:id/edit', danceClassController.renderEditDanceClassForm);
router.patch('/:id', danceClassController.updateDanceClass);
router.delete('/:id', danceClassController.deleteDanceClass);

module.exports = router;
