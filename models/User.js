const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
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

const User = mongoose.model('User', userSchema);
module.exports = User;
