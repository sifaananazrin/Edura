const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  qualification: {
    type: String,
    required: true,
    MenuItem: ['High School', 'Graduate', 'Undergraduate'] 
  },
  status: {
    type: String,
    default: "pending",
  },
  IsBlock: {
    type: String,
    default: "Active",
  },
});

module.exports = mongoose.model('Teacher', teacherSchema);
