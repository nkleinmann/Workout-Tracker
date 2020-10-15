const express = require("express");

//importing object from index.js, models is an object
const models = require("../models");

module.exports = function(app) {
    app.post("/api/workouts", function(req, res) {
        const workout = new models.Workout(new Date(), []);
        workout.save(function(err, response){
            if (err) throw (err);
            // saying response will return a json object
            res.json(response);
        });
    });
}

// module.exports = function(app) {

//     app.get("/", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     });

//     app.get("/exercise", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/exercise.html"));
//     });

//     app.get("/stats", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/stats.html"));
//     });
// }
