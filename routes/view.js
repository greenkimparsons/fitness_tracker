// /exercise
// /stats

const router = require("express").Router();
const Workout = require("../models/Workout.js");

// get and post exercise data
router.post("/exercise", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//view combined weight of multiple exercises from the past 7 workouts
//view total duration of each workout from past 7 workouts 
router.post("/stats", ({ body }, res) => {
    Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
