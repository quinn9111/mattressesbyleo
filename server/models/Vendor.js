const mongoose = require('mongoose');

const { Schema } = mongoose;

const vendorSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
