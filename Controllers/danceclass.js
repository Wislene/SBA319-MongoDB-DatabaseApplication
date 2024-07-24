const DanceClass = require('../models/DanceClass');

// GET all dance classes
exports.getAllDanceClasses = async (req, res) => {
  try {
    const danceClasses = await DanceClass.find();
    res.render('danceClasses', { danceClasses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET dance class by ID
exports.getDanceClassById = async (req, res) => {
  try {
    const danceClass = await DanceClass.findById(req.params.id);
    res.render('danceClass', { danceClass });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create a new dance class
exports.createDanceClass = async (req, res) => {
  const danceClass = new DanceClass(req.body);
  try {
    await danceClass.save();
    res.redirect('/danceClasses');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT/PATCH update a dance class
exports.updateDanceClass = async (req, res) => {
  try {
    const danceClass = await DanceClass.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/danceClasses/${danceClass._id}`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a dance class
exports.deleteDanceClass = async (req, res) => {
  try {
    await DanceClass.findByIdAndDelete(req.params.id);
    res.redirect('/danceClasses');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
