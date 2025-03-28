const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  district: { type: String, required: true },
  footTrafficScore: { type: Decimal128, required: true },
  longitude: { type: Decimal128, required: true },
  latitude: { type: Decimal128, required: true }
});

 
const Location = mongoose.model('Location', locationSchema);

module.exports = Location;