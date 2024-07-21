const mongoose = require("mongoose");
const { formatDistanceToNow } = require('date-fns');
const { string } = require("yargs");

const PostSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 200,
  },

  email: { 
    type: String 
  },

  // _id: { 
  //   type: mongoose.Schema.Types.ObjectId,
  //   require:false   },

  name: { 
    type: String 
  },

  userId: {
     type: Number 
    },

    image: {
      type: Object,
      default: {
        url: "",
        publicId: null,
      },
    },

  srcProfile: { 
    type: String, 
    default: "11.jpg" 
  },

  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
  },

  date: { type: Date,
     default: Date.now 
    },

  formattedDate: {
     type: String,
      required: true 
    },

  comments: [{
    text: {
      type: String,
      required: true,
    },
    date: { 
      type: Date,
       default: Date.now 
      },
    formattedDate: {
       type: String,
        required: true 
      },
    user: {
      type: Number,
      ref: "User",
      required: true,
    },
    srcProfile: {
       type: String,
       default: "11.jpg" 
      },
    nameC: { 
      type: String,
      default: "-----"
       },


  }]
});

// Middleware to update formattedDate before saving
PostSchema.pre('save', function (next) {
  this.formattedDate = formatDistanceToNow(this.date, { addSuffix: true });
  this.comments.forEach(comment => {
    comment.formattedDate = formatDistanceToNow(comment.date, { addSuffix: true });
  });
  next();
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
