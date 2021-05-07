const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        unique: true,
        required: "Enter a name"
      },
      type: {
        type: String,
        unique: true,
        required: "Enter a type of workout"
      },
      weight: {
        type: Number,
        required: "Enter weight"
      },
      sets: {
        type: Number,
        required: "Enter amount of sets"
      },
      reps: {
        type: Number,
        required: "Enter amount of reps"
      },
      duration: {
        type: Number,
        required: "Enter duration of time"
      },
      distance: {
        type: Number,
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;