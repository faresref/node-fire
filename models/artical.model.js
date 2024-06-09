
 const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
 
    name       : { type : String },
    age        : { type : Number },
    email      : { type : String },
    _id        : { type : Number  },
    passrepet  : { type : String },
    passwors   : { type : String },
    token      : { type : String },
    srcProfile : { type : String,default:"11.jpg"},
    isadmin    : { type : Boolean,
                default : false, 
                required: true}, 

    });
  
const Artical = mongoose.model('module', ArticleSchema);
  

module.exports = Artical