const URI = 'mongodb://paul:oracle123!@cluster0-shard-00-00-jjrmn.mongodb.net:27017,cluster0-shard-00-01-jjrmn.mongodb.net:27017,cluster0-shard-00-02-jjrmn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
const mongoose = require('mongoose');
mongoose.connect(URI, { useNewUrlParser: true });

let Schema = mongoose.Schema;

let locationSchema = new Schema({
  storeNumber: Number,
  name: String,
  streetAddress: String,
  city: String,
  state: String,
  zipCode: Number,
  latitude: Number,
  longitude: Number,
  distance: Number,
  driveThruHours: String,
  diningRoomHours: String,
  openDate: String,
  imageURL: String,
  englishApplicationURL: String,
  spanishApplicationURL: String,
  showSeparatedHours: Boolean,
  hasDiningRoom: Boolean,
  hasDriveThru: Boolean,
  underRemodel: Boolean,
  useGPSCoordinatesForDirections: Boolean
});

let Locations = mongoose.model('locations', locationSchema);

module.exports = Locations;
