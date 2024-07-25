import DanceClass from "../Models/DanceClassModel.js";

// Render form to create new dance class
exports.renderNewDanceClassForm = (req, res) => {
  res.render("newDanceClass");
};

// Render form to edit dance class
exports.renderEditDanceClassForm = async (req, res) => {
  try {
    const danceClass = await DanceClass.findById(req.params.id);
    res.render("editDanceClass", { danceClass });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all dance classes
exports.getAllDanceClasses = async (req, res) => {
  try {
    const danceClasses = await DanceClass.find();
    res.render("danceClasses", { danceClasses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
