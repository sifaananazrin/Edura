const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  link: { type: String },
  chapters: [{
    name: { type: String, required: true },
    description: { type: String },
    content: { type: String }
  }]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;