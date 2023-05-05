const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true
  },
    list: {
    type: Array,
  }
});

const exam = mongoose.model('Exam', courseSchema);

module.exports = exam;