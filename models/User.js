const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  birthDate: Date,
  googleID: String,
  school: [{ type: Schema.Types.ObjectId, ref: "School" }],
  courses: [{ type: String }],
  photo: String,
  isActive: Boolean,
  posts: [],
  status: {
    type : String,
    enum :["Pending Confirmation","Active"],
    default: `Pending Confirmation`
  },
  confirmationCode: {
    type: String,
   unique: true },
  email: String,
},
  {
    timestamps: true
  });



const User = mongoose.model('User', userSchema);
module.exports = User;
