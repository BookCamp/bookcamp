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
  photo: { type: String, default: `https://res.cloudinary.com/dtdx0w1qa/image/upload/v1582141469/photoDefault_qpyvax.png` },
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
