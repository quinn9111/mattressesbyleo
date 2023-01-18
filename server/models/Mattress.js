const { Schema } = require('mongoose');

const mattressSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  vendor: {
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
  },
});

module.exports = mattressSchema;
