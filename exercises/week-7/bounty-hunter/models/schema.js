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
    default: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/40/1506940543-piers-morgan-gmb.jpg'
  }
})

module.exports = mongoose.model("Bounty", BountySchema)