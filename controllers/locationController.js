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
  console.log('Inside the location controller post method');
  console.log(req.body);
  console.log(req.body.storeNumber);
  const newLocation = new Locations({storeNumber: req.body.storeNumber, name: req.body.name, streetAddress: req.body.streetAddress,
                                      city: req.body.city, state: req.body.state, zipCode: req.body.zipCode});
  newLocation.save().then(location => {
  }).catch(err => {
    res.status(400).send('unable to save to the database');
  });
  res.send('Successfully posted object in the database');
}

locationController.deleteLocation = (req, res, next) => {
  Locations.findOneAndRemove({_id: req.body._id}, (err, result) => {
    console.log(req.body);
    console.log('item has been deleted');
    if (err) new Error('sorry, your request did not go through');
    res.end();
  })
}

locationController.updateLocation = (req, res, next) => {
  Locations.findOneAndUpdate({_id: req.body._id}, {$set: {storeNumber: 5}}, {upsert: true}, (err, doc) => {
    if (err) {throw err;}
    else {console.log("item has been updated")}
  });
}

module.exports = locationController;
