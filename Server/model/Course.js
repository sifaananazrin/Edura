const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: false },
  description: { type: String, required: true },
  teachername: { type: String, required: true },
  category: {
    type: String,
    ref: 'categories',
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
  teacherid: { type: String },
  status: {
    type: String,
    default: "pending",
  },
  link: { type: String },
  list: {
    type: Array,
  },
  quizz: { type: String,default: "pending", },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;