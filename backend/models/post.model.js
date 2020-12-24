const mongoose = require('mongoose')

const Post = mongoose.model(
    "Post",
    new mongoose.Schema({
        image: String,
        description: String,
    })
)

module.exports = Post