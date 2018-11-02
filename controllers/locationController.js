const locationController = {};
const Locations = require('./../models/locationModel');
const stores = require('../db.json');

locationController.getLocations = (req, res, next) => {
  Locations.find().then(results => {
    res.locals.locations = results;
    next();
  }).catch(err => {
    console.log('unable to retrieve disasters');
  })
};

locationController.postLocation = (req, res, next) => {
  const newLocation = new Locations({storeNumber: req.body.storeNumber, name: req.body.name, streetAddress: req.body.streetAddress,
                                      city: req.body.city, state: req.body.state, zipCode: req.body.zipCode});
  newLocation.save().then(location => {
  }).catch(err => {
    res.status(400).send('unable to save to the database');
  });
}

module.exports = locationController;
