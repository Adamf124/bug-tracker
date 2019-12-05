require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 4000;

const MongoClient = require('mongodb').MongoClient;

app.use(cors());
app.use(express.json());

// <------ Database connection ------>
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
// <------ API Routes ------>
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`You're all set space cowboy. The app is running on port: ${port}`);
});