import mongoose from "mongoose";

const danceClassSchema = new mongoose.Schema({
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

const DanceClass = mongoose.model('DanceClass', danceClassSchema);

// module.exports = DanceClass; I receive an error statign that it needs an export named default

export default DanceClass;
