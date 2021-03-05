const PORT = 8000
const ROUNDS_OF_SALT = 15
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const User = require('./models/User')
const app = express()

mongoose.connect('mongodb://localhost/users', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true
}).then(() => console.log('Done'))

app.use(bodyParser.json())
app.use(cors())

app.route('/login').post(function (req, res) {
  console.log(req.body)
  res.send('ok')
})

app.route('/signup').post(async function (req, res) {
  const {id: email, password: plainTextPassword} = req.body
  const password = await bcrypt.hash(plainTextPassword, ROUNDS_OF_SALT)
  try {
    const response = await User.create({
      email,
      password
    })
    console.log(response)
    return res.json({
      token: 'svs'
    })
  } catch (e) {
    if (e.code === 11000) {
      return res.status(409).send({
        error: 'Duplicate Email'
      })
    }
  }
})

app.listen(PORT, () => console.log(`server started on ${PORT}`))
