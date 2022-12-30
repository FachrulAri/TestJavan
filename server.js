const express = require('express');
const cors = require('cors');
const connection = require('./db');
const routers = require('./routes');

const app = express()
app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(3000, function() {
    console.log('listening on 3000')
  })

app.use('/api', routers);
