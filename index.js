'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/user-routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', userRoutes.routes);

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  
})


app.listen(config.port, () => console.log('server running on port 8080'))