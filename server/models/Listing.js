const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  pictures: [{ type: String }],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Listing = model("Listing", listingSchema);

module.exports = Listing;
