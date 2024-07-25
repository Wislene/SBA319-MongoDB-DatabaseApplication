import express from "express";

import UserClassController from "../Controllers/DanceClassController.mjs";


const router = express.Router();


router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
