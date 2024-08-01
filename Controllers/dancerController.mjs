import Dancer from "../models/dancerModel.mjs";

// GET all dancers
export const getAllDancers = async (req, res) => {
  try {
    const dancers = await Dancer.find();
    res.render("dancers", { dancers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET dancer by ID
export const getDancerById = async (req, res) => {
  try {
    const dancer = await Dancer.findById(req.params.id);
    res.render("dancer", { dancer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create a new dancer
export const createDancer = async (req, res) => {
  const dancer = new Dancer(req.body);
  try {
    await dancer.save();
    res.redirect("/dancers");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT/PATCH update a dancer
export const updateDancer = async (req, res) => {
  try {
    const dancer = await Dancer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect(`/dancers/${dancer._id}`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a dancer
export const deleteDancer = async (req, res) => {
  try {
    await Dancer.findByIdAndDelete(req.params.id);
    res.redirect("/dancers");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
