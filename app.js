const express = require('express');

const authpath = require('./routes/auth.route');
const userpath = require('./routes/user.route');
const postpath = require('./routes/post.route');

require('dotenv').config();

const bodyParser = require('body-parser');

const { connectMongoDB } = require('./db/connectMongoDB');
const { auth } = require('firebase-admin');

      app  = express();
      cors = require('cors');
      port = 7000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.json())
app.use("/api/auth",authpath);
app.use("/api/user",userpath)
app.use("/api/post", postpath);

// Start Server and Connect to MongoDB
app.listen(port||7000, () => {
  console.log(`Server is running on port ${port}`);
  connectMongoDB().then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  })})



