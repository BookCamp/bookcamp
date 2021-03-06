const mongoose = require('mongoose')
const Schema = mongoose.Schema

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


const School = mongoose.model('School', SchoolSchema);
module.exports = School;