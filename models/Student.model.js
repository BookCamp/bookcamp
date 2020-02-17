const mongoose = require('mongoose');
const { Schema, model } = mongoose;



const StudentSchema = new Schema({
  username: String,
  email: {type:String, unique:true}, 
  password: String,
  birthDate: Date,
  school: [],
  course: [],
  photo: String,
  hobbies: [],
  isActive:Boolean
},
{
timestamps:true
});

module.exports = model('Student', StudentSchema);