const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});  
  newUser.save()
  
    .then(() => res.json(`${username} has been added as a new user in the database.`))
    .catch(err => res.status(400).json('Error: ' + err));
    console.log(`${username} has been added as a new user in the database.`)
});

module.exports = router;