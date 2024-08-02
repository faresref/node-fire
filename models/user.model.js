
//  const mongoose = require('mongoose')

// const ArticleSchema = new mongoose.Schema({
 
//     name       : { type : String },
//     age        : { type : Number },
//     email      : { type : String },
//     _id        : {  type: mongoose.Schema.Types.ObjectId  },
//     passrepet  : { type : String },
//     passwors   : { type : String },
//     token      : { type : String },
//     srcProfile : { type : String,default:"11.jpg"},
//     isadmin    : { type : Boolean,
//                 default : false, 
//                 required: true},
//     image      : {
//                type: Object,
//                default: {
//                  url: "",
//                  publicId: null,
//                },
//              }, 

//     });
  
// const Artical = mongoose.model('module', ArticleSchema);
  

// module.exports = Artical


const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  _id: { type: mongoose.Schema.Types.ObjectId },
  email: { type: String },
  password: { type: String },
  passrepet: { type: String },
  image: {
    type: Object,
    default: {
      url: "",
      publicId: null,
    },
  },
});

const Article = mongoose.model('module', ArticleSchema);

module.exports = Article;
