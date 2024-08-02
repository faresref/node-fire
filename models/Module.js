const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String },
  _id: { type: mongoose.Schema.Types.ObjectId },
  passrepet: { type: String },
  password: { type: String },
  src: { type: String },
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
