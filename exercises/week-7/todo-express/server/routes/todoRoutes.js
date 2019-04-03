const express = require('express')
const todoRoutes = express.Router()
// const data = require('./todos')
// const uuid = require('uuid')
const Todo = require('../models/todo');

todoRoutes.route('/')

      // .get((req, res) => {
      //   res.send(data)
      // })

      .get((req, res) => {
        Todo.find({user: req.user._id}, (err, todo) => {
          if(err) {
            res.status(500)
            return next(err)
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

      .post((req, res, next) => {
        if(Object.keys(req.body).length !== 0) {
          const newObj = new Todo(req.body)

          newObj.user = req.user._id

          newObj.save(err => {
            if(err) {
              res.status(500)
              return next(err)
            }
            return res.status(200).send(newObj)
          })
        } else {
          res.send("Can't create that!")
        }
      })

todoRoutes.route('/:id')

      .get((req, res) => {
        const { id } = req.params
        Todo.findOne({_id: id, user: req.user._id}, (err, todo) => {
          if(err) {
            res.status(500)
            return next(err)
          }
          if(!todo) {
            res.status(404)
            return next(new Error("not todo found!"))
          }
          return res.status(200).send(todo)
        })
        // const todo = data.find(todo => {
        //   return todo._id === id
        // })
        // todo ? res.send(todo) : res.send("woops, can't find it!")
      })

      .put((req, res) => {
        const  { id } = req.params
        const updatedObj = req.body

        Todo.findOneAndUpdate({id: req.user._id, user: req.user._id}, (err, todo) => {

        })

        // data.forEach(todo => {
        //   return todo._id === id ? todo = Object.assign(todo, updatedObj) : null
        // })
        // const found = data.find(todo => {
        //   if(todo._id === id) {
        //     return todo
        //   }
        // })
        // found ? res.send(found) : res.send('did not update')
      })

      .delete((req, res) => {
        const { id } = req.params
        Todo.findOneAndDelete({_id: id, user: req.user._id}, (err, todo) => {
          if(err) {
            res.status(500)
            return next(err)
          }
          return res.status(200).send("deleted!")
        })
        // const index = data.findIndex(todo => {
        //   return todo._id === id
        // })
        // data.splice(index, 1)
        // res.send(data)
      })

module.exports = todoRoutes