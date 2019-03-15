const express = require('express')
const app = express()
const port = 6000
const mongoose = require('mongoose')

app.use(express.json())

//Our routes become middleware
app.use('/todos', require('./todoRoutes'))
app.use('/items', require('./inventoryRoutes'))

mongoose.connect('mongodb://localhost:27017/todos', {useNewUrlParser: true}).then(() => {
  console.log('Connected to MongoDB')
})

app.listen(port, () => {
  console.log(`server up on ${port}!`)
})