const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BountySchema = new Schema({
  firstName: String,
  lastName: String,
  living: {
    type: Boolean,
    default: true
  },
  price: Number,
  type: String,
  image: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model("Bounty", BountySchema)