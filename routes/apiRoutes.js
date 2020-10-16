const express = require("express");
const { Workout } = require("../models");

// const router = express.Router();

//importing object from index.js, models is an object
const models = require("../models");

module.exports = function (app) {
    // app.post("/api/workouts", function (req, res) {
    //     const workout = new models.Workout(new Date(), []);
    //     workout.save(function (err, response) {
    //         if (err) throw (err);
    //         // response will return a json object
    //         res.json(response);
    //     });
    // });

    app.post("/api/workouts", (req, res) => {
        Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        });
    })

    app.get("/api/workouts", function (req, res) {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
        
    });

    app.post("api/workouts/range", (req, res) => {
        Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", ({body, params}, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: {exercises: body } },
            {new: true}
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
