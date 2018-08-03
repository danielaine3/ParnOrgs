const mongoose = require('mongoose');

const { Schema } = mongoose;

const scholarSchema = new Schema({
   firstName: {
    type: String,
    reqired: true
  },
  lastName:{
    type:String,
    required: true
  },
  grade: {
    type: String,
  },
  homeroom: {
    type: String,
    trim: true,
    required: true,
  }, 
  user: {
    type: Schema.Types.ObjectId, ref: 'user'
  }
});

const Scholar = mongoose.model('Scholar', scholarSchema);

module.exports = Scholar;
