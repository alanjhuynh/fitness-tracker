const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Session = new mongoose.Schema({
    refreshToken: {
      type: String,
      default: '',
    },
  })
  

const UserSchema = new mongoose.Schema({
    email: {
        type: String, 
        required:true, 
        unique:true
    },
    username : {
        type: String, 
        unique: true, 
        required:true
    },
    refreshToken: {
        type: [Session],
      },
});

//Remove refreshToken from the response
UserSchema.set("toJSON", {
    transform: function (doc, ret, options) {
      delete ret.refreshToken
      return ret
    },
  })

UserSchema.plugin(passportLocalMongoose);

module.exports = Lift = mongoose.model('User', UserSchema);