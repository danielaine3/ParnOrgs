const mongoose = require('mongoose');

const { Schema } = mongoose;

const scholarSchema = new Schema({
  // Note: actual password won't be stored, only salted hash of password
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
  // monday: {
  //   type: Boolean,
  //   default: false,
  // },
  // tuesday: {
  //   type: Boolean, 
  //   default: false,
  // }, 
  // wednesday: {
  //   type: Boolean,
  //   default: false, 
  // }, 
  // thursday : {
  //   type: Boolean,
  //   default: false, 
  // }, 
  // friday: {
  //   type: Boolean,
  //   default: false, 
  // }, 
  // allweek: {
  //   type: Boolean, 
  //   default: false,
  // },
  user: {
    type: Schema.Types.ObjectId, ref: 'user'
  }
});

const Scholar = mongoose.model('Scholar', scholarSchema);

module.exports = Scholar;
