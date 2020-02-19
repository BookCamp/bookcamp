const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: String,
    type: { type: String, enum: ['Photo', 'File', 'Comment', 'URL', 'Location'] },
    url: String,
    file: String,
    img: String,
    location: { lat: { type: Number }, lng: { type: Number } },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    school: { type: Schema.Types.ObjectId, ref: "School" },
    course: String,
    imgName: String,
    imgPath: String
}, {
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
