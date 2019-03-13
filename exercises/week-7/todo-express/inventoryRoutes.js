const express = require('express')
const inventoryRoutes = express.Router()
const inventoryItems = require('./items')

inventoryRoutes.route('/')

      .get((req, res) => {
        const {type, minPrice, maxPrice} = req.query

        if(type && minPrice && maxPrice) {
          const typeAndPrice = inventoryItems.filter(item => {
            return item.type === type && item.price > +minPrice && item.price < +maxPrice
          })
          res.send(typeAndPrice)
        } else if(minPrice && maxPrice) {
          const cost = inventoryItems.filter(item => {
            return item.price > +minPrice && item.price < +maxPrice
          })
          res.send(cost)
        } else if(type) {
          const food = inventoryItems.filter(item => {
            return item.type === type
          })
          res.send(food)
        } else {
          res.send(inventoryItems)
        }
      })

module.exports = inventoryRoutes