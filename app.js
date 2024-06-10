const express = require('express');

const userpath = require('./routes/auth.route');
const postpath = require('./routes/post.route');

require('dotenv').config();

const { connectMongoDB } = require('./db/connectMongoDB');

      app  = express();
      cors = require('cors');
      port = 7000;

app.use(cors());
app.use(express.json())
app.use("/api/user",userpath)
app.use("/api/posts", postpath);

// Start Server and Connect to MongoDB
app.listen(port||7000, () => {
  console.log(`Server is running on port ${port}`);
  connectMongoDB().then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  })})



