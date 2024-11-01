const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subjects: [String],
  availability: [String],
  classType: { type: String, enum: ['subject', 'lab'] },
  labDetails: {
    labHours: { type: Number },
    labDay: { type: String }
  }
});
module.exports = mongoose.model('Teacher', TeacherSchema);
