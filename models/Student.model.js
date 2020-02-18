const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const StudentSchema = new Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  birthDate: Date,
  school: [{ type: Schema.Types.ObjectId, ref: "School" }],
  courses: [{ type: String }],
  photo: String,
  hobbies: [],
  isActive: Boolean,
  posts: []
},
  {
    timestamps: true
  });
module.exports = model('Student', StudentSchema);