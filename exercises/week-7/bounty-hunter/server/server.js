const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')

app.use(express.json())


app.use('/api/bounties', require('../routes/bountyRoutes'))

mongoose.connect('mongodb://localhost:27017/bounty_hunter', {useNewUrlParser: true}).then(() => console.log('Mon-gooooooo')).catch(err => console.log(err))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})