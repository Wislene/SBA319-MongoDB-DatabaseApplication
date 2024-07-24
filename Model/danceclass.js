const mongoose = require('mongoose');

const danceClassSchema = new mongoose.Schema({
  name: {
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

module.exports = DanceClass;
