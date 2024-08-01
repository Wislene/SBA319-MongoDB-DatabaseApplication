import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
  ClassName: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
    required: true,
  },
}, { timestamps: true });

const Class = mongoose.model('Class', ClassSchema);

// module.exports = DanceClass; I receive an error statign that it needs an export named default

export default Class;
