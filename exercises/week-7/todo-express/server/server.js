const express = require('express')
const app = express()
require('dotenv').config()
const expressJWT = require('express-jwt')
const port = 6000
const mongoose = require('mongoose')

app.use(express.json())

//Applies express-jwt middleware on anything using the route '/api'
app.use('/api', expressJWT({secret: process.env.SECRET}))

//Our routes become middleware
// ties the user object to req.user in our server
app.use('/api/todos', require('./routes/todoRoutes'))
app.use('/api/items', require('./routes/inventoryRoutes'))
app.use('/auth', require('./routes/authRouter'))


mongoose.connect('mongodb://localhost:27017/todos', {useNewUrlParser: true}).then(() => {
  console.log('Connected to MongoDB')
})

// global error handler, it will process all errors in our server that are passed through 'next'
app.use((err, req, res) => {
  console.log(err)
  if(err.name === 'UnauthorizedError') {
    res.status(err.status)
  }
  return res.send({
    message: err.message
  })
})

app.listen(port, () => {
  console.log(`server up on ${port}!`)
})