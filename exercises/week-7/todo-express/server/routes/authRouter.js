const express = require('express')
const User = require('../models/user')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

authRouter.post('/signup', (req, res, next) => {
  User.findOne({username: req.body.username}, (err, existingUser) => {
    if(err) {
      res.status(500)
      return next(err)
    } 
    if(existingUser !== null) return res.status(400).send(new Error("that username already exists!"))
    if(existingUser) return res.status(200).send(existingUser)
    const newUser = new User(req.body)
    newUser.save((err, user) => {
      if(err) {
        res.status(500)
        return next(err)
      } 
      // 1st argument -- our user object converted to js from json
      // 2nd argument -- our secret from .env
      const token =  jwt.sign((user.toObject(), process.env.SECRET))
      console.log(token)
      return res.status(200).send({
        success: true,
        user: user.toObject(),
        token
      })
    })
  })
})

authRouter.post('/login', (req, res, next) => {
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
    if(err) {
      res.status(500)
      return next(err)
    } 
    if(!user || user.password !== req.body.password) return res.status(403).send(new Error('username or password is incorrect'))
    const token = jwt.sign(user.toObject(), process.env.SECRET)
    return res.send({
      token,
      user: user.toObject(),
      success: true
    })
  })
})

module.exports = authRouter