
const mongoose = require('mongoose')

const AdmineSchema = new mongoose.Schema({
 
    username     : { type : String },
    pass         : { type : String },
    // age      : { type : Number },
    // email    : { type : String },
    // _id     : { type : Number  },
    // passrepet: { type : String },
    // passwors : { type : String },
  
    });
  
const Admine = mongoose.model('admine', AdmineSchema);
  

module.exports = Admine