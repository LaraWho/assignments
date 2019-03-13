const express = require('express')
const app = express()
const uuid = require('uuid')
const port = 6000
const data = require('./todos')

app.use(express.json())

app.get('/todos', (req, res) => {
  res.send(data)
})

app.post('/todos', (req, res) => {
  const newObj = req.body
  newObj._id = uuid.v4()
  data.push(newObj)
  newObj ? res.send(newObj) : res.send("Can't create that!")
})

app.get('/todos/:id', (req, res) => {
  const { id } = req.params
  const todo = data.find(todo => {
    return todo._id === id
  })
  todo ? res.send(todo) : res.send("woops, can't find it!")
})

app.put('/todos/:id', (req, res) => {
  const  { id } = req.params
  const updatedObj = req.body
  data.forEach(todo => {
    return todo._id === id ? todo = Object.assign(todo, updatedObj) : null
  })
  data ? res.send(data) : res.send("can't update!")
})

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params
  const index = data.findIndex(todo => {
    return todo._id === id
  })
  data.splice(index, 1)
  res.send(data)
})


app.listen(port, () => {
  console.log(`server up on ${port}!`)
})