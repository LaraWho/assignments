// Express is a web framework for Node.js
const express = require('express')
// Save the use of express
const app = express()
// Port variable
const port = 5678

// Package to create a unique id
const uuid = require('uuid')

// Middleware - a package with methods which acts as a bridge. In this instance it's between the client and our server
const bodyParser = require('body-parser')
// Replaced with 'express.json()' on line 41 

// Creating some data to use
const database = [
  {
    name: 'spaghetti',
    type: 'pasta',
    sauce: 'red',
    _id: '12'
  }, 
  {
    name: 'calzone',
    type: 'pizza',
    sauce: 'red',
    _id: '3445'
  }, 
  {
    name: 'fettuccine',
    type: 'pasta',
    sauce: 'red',
    _id: '5645'
  }, 
  {
    name: 'lasagne',
    type: 'pasta',
    sauce: 'white',
    _id: uuid.v4()
  }
]

// Turn data we receive from JSON into a JavaScript object
// Translator between JSON and JS
app.use(express.json())

// 'app' is now the return from express. First parameter is a URL string and the second is a callback function
// Getting the database info
app.get('/food', (req, res) => {
  // The response is everything we want to return to the user
  res.send({database})
})

app.post('/food', (req, res) => {
  const newObj = req.body
  newObj._id = uuid.v4()
  database.push(newObj)
  res.send(newObj)
})

app.get('/food/:id', (req, res) => {
  const { id } = req.params
  const found = database.find(item => {
    return item._id === id
  })
  found ? res.send(found) : res.send("not found!")
})

app.delete('/food/:id', (req, res) => {
  const { id } = req.params
  const index = database.findIndex(item => {
    return item._id === id})
  database.splice(index, 1)
  res.send(database)
})

app.put('/food/:id', (req, res) => {
  const updatedObj = req.body
  const { id } = req.params
  database.forEach(item => {
    if(item._id === id) {
      item = Object.assign(item, updatedObj)
    }
  })
  res.send(database)
})

// Running the server on a specific port
app.listen(port, () => {
  console.log(`Server up on ${port}!`)
})

// Server listens for requests and sends responses