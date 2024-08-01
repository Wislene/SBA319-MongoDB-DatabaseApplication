import express from "express";
import Class from "../Models/classModel.mjs";
import Dancer from "../Models/dancersModel.mjs";

const router = express.Router();

// Seed route for classes
router.get("/seed/classes", async (req, res) => {
  try {
    await Class.create([
      { className: "Ballroom Dance for Beginners", level: "Beginner" },
      { className: "Ballet for Beginners", level: "Beginner" },
      { className: "Contemporary Dance Basics", level: "Beginner" },
      { className: "Folk Dance Basics", level: "Beginner" },
      { className: "Hip Hop Basics", level: "Beginner" },
      { className: "Jazz Dance for Beginners", level: "Beginner" },
      { className: "Salsa for Beginners", level: "Beginner" },
      { className: "Tap Dance Basics", level: "Beginner" },
      { className: "Intermediate Ballet", level: "Intermediate" },
      { className: "Intermediate Ballroom Dance", level: "Intermediate" }
    ]);
    res.redirect("/Classes");
  } catch (error) {
    console.error(error);
  }
});

// Seed route for dancers
router.get("/seed/dancers", async (req, res) => {
  try {
    await Dancer.create([
      { username: "Michaëlle Jean", age: 17 },
      { username: "Wyclef Jean", age: 20 },
      { username: "Jean-Michel Basquiat", age: 18 },
      { username: "Edwidge Danticat", age: 16 },
      { username: "Garcelle Beauvais", age: 15 },
      { username: "Herbie Lovebug Azor", age: 17 },
      { username: "Jason Derulo", age: 19 },
      { username: "Frank Ocean", age: 21 },
      { username: "Ellen DeGeneres", age: 14 },
      { username: "Portia de Rossi", age: 19 }
    ]);
    res.redirect("/dancers");
  } catch (error) {
    console.error(error);
  }
});

export default router;
