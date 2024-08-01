import Class from "../models/classModel.mjs";

// Render form to create new class
export const renderNewClassForm = (req, res) => {
  res.render("newClass");
};

// Render form to edit class
export const renderEditClassForm = async (req, res) => {
  try {
    const classItem = await Class.findById(req.params.id);
    res.render("editClass", { classItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all classes
export const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.render("classes", { classes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET class by ID
export const getClassById = async (req, res) => {
  try {
    const classItem = await Class.findById(req.params.id);
    res.render("class", { classItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create a new class
export const createClass = async (req, res) => {
  const classItem = new Class(req.body);
  try {
    await classItem.save();
    res.redirect("/classes");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT/PATCH update a class
export const updateClass = async (req, res) => {
  try {
    const classItem = await Class.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect(`/classes/${classItem._id}`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a class
export const deleteClass = async (req, res) => {
  try {
    await Class.findByIdAndDelete(req.params.id);
    res.redirect("/classes");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
