import mongoose from "mongoose";

const DancersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

const Dancers = mongoose.model("Dancers", DancersSchema);

export default Dancers;


