const express = require('express')
const app = express()
const port = 6000

app.use(express.json())

app.use('/todos', require('./todoRoutes'))
app.use('/items', require('./inventoryRoutes'))

app.listen(port, () => {
  console.log(`server up on ${port}!`)
})