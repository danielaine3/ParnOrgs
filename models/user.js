const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  // Note: actual password won't be stored, only salted hash of password
   firstName: {
    type: String,
  },
  lastName:{
    type:String,
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
  username: {
    type: String,
    trim: true,
    required: 'Username is required',
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },

  // `chapterRef` is an object that stores a Chapter id
  // The ref property links the ObjectId to the Chapter model
  // This allows us to populate the User with an associated Chapter
  scholarRef: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Scholar',
    },
  ],
  datesRef: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Dates',
    },
  ],
//   expRef: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Expense',
//     },
//   ],
});

const otherPassportOptions = {
  usernameUnique: true,
  passwordValidator: (input, cb) => {
    if (input.length < 6) {
      return cb({ code: 400, messaage: 'Password should be at least 6 characters long.' });
    }
    return cb(null);
  }
};

passport.serializeUser((user, done) => {
  done(null, user);
});
// console.log('user model', UserSchema);

UserSchema.plugin(passportLocalMongoose, otherPassportOptions);

const User = mongoose.model('User', UserSchema);

passport.deserializeUser((user, done) => {
  User.findById(user._id)
    // .populate({ path: 'expRef', options: { sort: { expDate: -1 } } })
    .populate('scholarRef')
    .populate('datesRef')
    .exec((err, data) => {
      if (err) {
        console.log('Error when deserializes user', err);
      } else {
        done(null, data);
      }
    });
});

module.exports = User;
