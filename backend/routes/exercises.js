const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req,res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Uh oh: ' + err));
});

router.route('/add').post((req, res) => {
    const exercise = req.body.exercise
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = new Exercise({
        exercise,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json(`The ${exercise} task has been added to the database.`))
        .catch(err => res.status(400).json('Uh oh: ' + err));
    
});

module.exports = router;