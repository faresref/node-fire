const mongoose = require("mongoose");
const { number } = require("yargs");

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
    idPost       : { type : Number },
    name         : { type : String },
    userId       : { type : Number },
    src          : { type : Number  ,default:3},
    srcProfile   : { type : Number  ,default:2},
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