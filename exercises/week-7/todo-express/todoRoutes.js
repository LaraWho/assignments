const express = require('express')
const todoRoutes = express.Router()
// const data = require('./todos')
// const uuid = require('uuid')
const Todo = require('./todo')

todoRoutes.route('/')

      // .get((req, res) => {
      //   res.send(data)
      // })

      .get((req, res) => {
        Todo.find((err, todo) => {
          if(err) {
            return res.status(500).send(err)
          } else {
            return res.status(200).send(todo)
          }
        })
      })

      // .post((req, res) => {
      //   if(Object.keys(req.body).length !== 0) {
      //     const newObj = req.body
      //     newObj._id = uuid.v4()
      //     data.push(newObj)
      //     res.send(newObj)
      //   } else {
      //     res.send("Can't create that!")
      //   }
      // })

      .post((req, res) => {
        if(Object.keys(req.body).length !== 0) {
          const newObj = new Todo(req.body)
          newObj.save(err => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(newObj)
          })
        } else {
          res.send("Can't create that!")
        }
      })

todoRoutes.route('/:id')

      .get((req, res) => {
        const { id } = req.params
        const todo = data.find(todo => {
          return todo._id === id
        })
        todo ? res.send(todo) : res.send("woops, can't find it!")
      })

      .put((req, res) => {
        const  { id } = req.params
        const updatedObj = req.body
        data.forEach(todo => {
          return todo._id === id ? todo = Object.assign(todo, updatedObj) : null
        })
        const found = data.find(todo => {
          if(todo._id === id) {
            return todo
          }
        })
        found ? res.send(found) : res.send('did not update')
      })

      .delete((req, res) => {
        const { id } = req.params
        const index = data.findIndex(todo => {
          return todo._id === id
        })
        data.splice(index, 1)
        res.send(data)
      })

module.exports = todoRoutes