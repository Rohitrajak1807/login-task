const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  skills: {
    type: [String],
    maxlength: 8
  }
}, {
  collection: 'users'
})

const model = mongoose.model('UserSchema', UserSchema)
module.exports = model
