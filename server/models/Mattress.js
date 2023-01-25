const mongoose = require('mongoose');

const { Schema } = mongoose;

const mattressSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mattress_Id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  size: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  vendor: {
    type: Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true
  }
});

const Mattress = mongoose.model('Mattress', mattressSchema);

module.exports = Mattress;

