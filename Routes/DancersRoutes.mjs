// import express from "express";
// import {
//   getAllUsers,
//   createUser,
//   getUserById,
//   updateUser,
//   deleteUser,
// } from "../Controllers/dancerController.mjs";

// const router = express.Router();

// router.get("/", getAllUsers);
// router.post("/", createUser);
// router.get("/new", (req, res) => {
//   res.render("newUser");
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
  getAllDancers,
  createDancer,
  getDancerById,
  updateDancer,
  deleteDancer
} from "../Controllers/dancerController.mjs";

const router = express.Router();

router.get("/", getAllDancers);
router.post("/", createDancer);
router.get("/:id", getDancerById);
router.patch("/:id", updateDancer);
router.delete("/:id", deleteDancer);

export default router;
