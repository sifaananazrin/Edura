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
  link: {
    type: String,
    required: false,
  },
  course_id: {
    type: String,
    required: false,
  },
  teachername: {
    type: String,
    required: true,
  },
  teacherid: {
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
  list: {
    type: Array,
  }
  // rating:{
  //   type: Number, // changed the data type to Number
  //   required: false, // set to false as rating is optional
  // }

}, { timestamps: true });



const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;