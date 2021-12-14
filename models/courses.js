const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: "Description du cours",
  },

  volume: {
    type: Number,
    max: 120,
  },

  StarDate: {
    type: Date,
  },

  participants:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Participant",
  }],
  
});

const coursesModel = mongoose.model("Courses", coursesSchema);
module.exports = coursesModel;
