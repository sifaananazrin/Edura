const mongoose = require('mongoose');
const { Schema } = mongoose;

const quizSchema = new Schema({

  courseId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: false
  },
  question: {
    type: String,
    required: true
  },
  a: {
    type: String,
    required: true
  },
  b: {
    type: String,
    required: true
  },
  c: {
    type: String,
    required: true
  },
  d: {
    type: String,
    required: true
  },
  correct: {
    type: String,
    enum:["a","b","c","d"],
    required: true
  }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
