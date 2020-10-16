const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({ 
    day: {
        type: Date,
        required: 'Date is required',
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String, 
                trim: true,
                required: 'Please enter a type'
            },
            name: {
                type: String,
                trim: true,
                required: 'Please enter a name'
            },
            duration: {
                type: Number,
                required: 'Please enter a duration'
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            }, 
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;