const mongoose = require('mongoose')

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
}, {
  collection: 'skills'
})

const model = mongoose.model('SkillSchema', SkillSchema)

module.exports = model
