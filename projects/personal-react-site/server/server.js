const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')

require('dotenv').config();
const app = express();
app.use(bodyParser.json());

const cntrl = require('./controller');

massive(process.env.CONNECTION_STRING)
.then(db => {
    console.log("database connected!");
    app.set('db', db)
}).catch( error => console.error('ERROR!', error))

app.post('/api/list', cntrl.saveItem);
app.get('/api/saved', cntrl.getImg);

app.listen(5678, ( ) => {
  console.log(`Listening on port: 5678`)
});