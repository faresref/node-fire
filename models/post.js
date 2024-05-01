const mongoose = require("mongoose");

// Post Schema
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 200,
    },
    email        : { type : String },
    idPost          : { type : Number },
    name         : { type : String },
    userId       : { type : Number },
    src          : { type : String  ,default:"imgp/1.jpg"},
    srcProfile   : { type : String  ,default:"imgp/2.jpg"},
    description  : {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
    image: {
      type: Object,
      default: {
        url: "imgp/sada.png"      },
    }
  }
);



// Post Model
const Post = mongoose.model("Post", PostSchema);
module.exports = Post