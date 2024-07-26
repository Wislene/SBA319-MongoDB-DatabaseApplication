import User from "../models/userModel.mjs";

// GET all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render("users", { users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("user", { user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create a new user
export const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.redirect("/users");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT/PATCH update a user
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect(`/users/${user._id}`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/users");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
