const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: String,
  description: String,
  imgURL: String
})

module.exports = mongoose.model("Todo", todoSchema)