const mongoose = require('mongoose'); 


const ArticleSchema = new mongoose.Schema({
 
    name: { type: String },
    age: { type: Number },
    email: { type: String },
     _id : Number,
    passrepet: { type : String},
    passwors: { type : String},
  
  });
  
  const Article = mongoose.model('module', ArticleSchema);
  

module.exports = Article