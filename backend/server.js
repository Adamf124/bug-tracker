require('dotenv').config();

const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 4000;

const MongoClient = require('mongodb').MongoClient;

app.use(cors());
app.use(express.json());

// <------ Database connection ------>
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// Go ahead and use the MongoDB full driver settings and sub the uri string with the 
// env variables
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// <------ API Routes ------>
// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');

// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`You're all set space cowboy. The app is running on port: ${port}`);
});