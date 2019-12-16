require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// <------ Database connection ------>
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true});


const connection = mongoose.connection;
connection.once('open', () => {

  console.log("You are now connected to the Cloud ATLAS. Welcome aboard.");
})
// <------ API Routes ------>
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/', express.static('public'))
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`You're all set space cowboy. The app is running on port: http://localhost:${port}`);
});