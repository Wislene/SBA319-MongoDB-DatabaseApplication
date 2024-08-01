// import express from "express";
// import {
//   getAllUsers,
//   createUser,
//   getUserById,
//   updateUser,
//   deleteUser,
// } from "../controllers/userControllers.mjs";

// const router = express.Router();

// router.get("/", getAllUsers);
// router.post("/", createUser);
// router.get("/new", (req, res) => {
//   res.render("newUser"); // Ensure this view exists
// });
// router.get("/:id", getUserById);
// router.get("/:id/edit", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     res.render("editUser", { user });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// router.patch("/:id", updateUser);
// router.delete("/:id", deleteUser);

// export default router;

import express from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../Controllers/userController.mjs";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
