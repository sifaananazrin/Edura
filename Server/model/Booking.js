const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;
const bookingSchema = new Schema({
  order_id: {
    type: String,
    unique: true,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  totalAmount: {
    type: Number,
    required: true,
  },

  image:[{
    url:{
      type:String
    },
    filename:{
      type:String
    }
  }],

}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;