const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Aquí el esquema
const SchoolSchema = new Schema({
  name: { type: String, unique: true },
  address: String,
  contact: String,
  yearFoundation: Number,
  courses: [{ type: String }],
  studentsCount: []
}, {
  timestamps: true
});


module.exports = mongoose.model('School', SchoolSchema)