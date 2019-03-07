const express = require('express'),
      massive = require('massive'),
      bodyParser = require('body-parser')

require('dotenv').config();
const app = express();
app.use(bodyParser.json());

const cntrl = require('./controller');

// cloudinary.config({ 
//   cloud_name: process.env.CLOUD_NAME, 
//   api_key: process.env.API_KEY, 
//   api_secret: process.env.API_SECRET
// })


massive(process.env.CONNECTION_STRING)
.then(db => {
    console.log("database connected!");
    app.set('db', db)
}).catch( error => console.error('ERROR!', error))

// app.post('/image-upload-single', (req, res) => {
//   const path = Object.values(Object.values(req.files)[0])[0].path
//   cloudinary.uploader.upload(path)
//     .then(image => res.json([image]))
// })

app.post('/api/list', cntrl.saveItem);
app.get('/api/saved', cntrl.getImg);


app.listen(5678, ( ) => {
  console.log(`Listening on port: 5678`)
});