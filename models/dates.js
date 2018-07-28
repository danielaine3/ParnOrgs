const mongoose = require('mongoose');

const { Schema } = mongoose;

const dateSchema = new Schema({
  date: {
    type: 'date',
  },
  user: {
    type: Schema.Types.ObjectId, ref: 'user'
  }
});

const Date = mongoose.model('Date', dateSchema);

module.exports = Date;