const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Aquí el esquema
const PostSchema = new Schema({
  title: String,
  type: { type: String, enum: ['Photo', 'File', 'Comment', 'URL', 'Location'] },
  url: String,
  comment: String,
  file: String,
  img: String,
  location: { lat: { type: Number }, lng: { type: Number } },
  creator: { type: Schema.Types.ObjectId, ref: "Student" },
  school: { type: Schema.Types.ObjectId, ref: "School" },
  course: String
}, {
  timestamps: true
});

//Supported by Fran Naranjo
module.exports = mongoose.model('Post', PostSchema)