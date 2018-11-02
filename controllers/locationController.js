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

locationController.getStates = (req, res, next) => {
  Locations.find().then((results, o = {}) => {
    Array.from(results).forEach(r => o[r['state']] = true);
    res.locals.states = Object.keys(o);
    next();
  }).catch(err => {
    console.log('unable to retrieve disasters');
  })
};

module.exports = locationController;
