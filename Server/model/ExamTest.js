const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  list: [
    {
      question: {
        type: String,
        required: true
      },
      answer: {
        type: String,
        required: true
      }
    }
  ]
});

const answers = mongoose.model('answers', courseSchema);

module.exports = answers;
