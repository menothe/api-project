//npm modules
const express = require('express');
const mongoose = require('mongoose');
const locationController = require('./controllers/locationController');
const fs = require('fs');
const Locations = require('./models/locationModel');
const stores = require('./db.json');
const PORT = process.env.PORT || 3000;


//files


const path = require('path');

//the actual express app instance;
const app = express();

//parsing body for post routes
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//pathing to specific files
app.use(express.static(path.join(__dirname, './../public')));

app.get('/', (req, res) => {
  res.send('<h1>Hello!</h1>');
})

app.get('/locations', locationController.getLocations, (req, res) => {
  // these console.log statements are for demo-ing purposes.
  console.log("You've just hit the getLocations endpoint!\n");
  console.log("req.headers: ", req.headers, "\n\n");
	res.json(res.locals.locations);
});

app.post('/locations', locationController.postLocation);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
