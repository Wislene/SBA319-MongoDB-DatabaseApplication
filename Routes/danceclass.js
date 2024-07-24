const express = require('express');
const router = express.Router();
const danceClassController = require('../controllers/danceClassController');

router.get('/', danceClassController.getAllDanceClasses);
router.post('/', danceClassController.createDanceClass);
router.get('/:id', danceClassController.getDanceClassById);
router.patch('/:id', danceClassController.updateDanceClass);
router.delete('/:id', danceClassController.deleteDanceClass);

module.exports = router;
