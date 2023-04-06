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
  link: { type: String },
  chapters: [{
    name: { type: String, required: true }, 
    description: { type: String },
    content: { type: String }
  }]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;