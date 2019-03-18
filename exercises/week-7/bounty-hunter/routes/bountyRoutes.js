const express = require('express')
const bountyRoutes = express.Router()
const Bounty = require('../models/schema')

bountyRoutes.route('/')

  .get((req, res) => {
    Bounty.find((err, bounties) => {
      if(err) return res.status(500).send(err)
      return res.status(200).send(bounties)
    })
  })

  .post((req, res) => {
    if(Object.keys(req.body).length !== 0) {
      const newObj = new Bounty(req.body)
      newObj.save(err => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(newObj)
      }) 
    } else {
      res.send(`Can't add that!`)
    }
  })

  bountyRoutes.route('/:id')

    .get((req, res) => {
      Bounty.findById(
        {_id: req.params.id},
        (err, bounty) => {
          if(err) return res.status(500).send(err)
          return res.status(200).send(bounty)
        }
      )
    })

    .put((req, res) => {
      Bounty.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        (err, bounty) => {
          if(err) return res.status(500).send(err)
          return res.status(200).send(bounty)
        })
    })

    .delete((req, res) => {
      Bounty.findOneAndDelete(
        {_id: req.params.id},
        (err) => {
          if(err) return res.status(500).send(err)
          return res.status(200).send('deleted!')
        })
    })

  module.exports = bountyRoutes