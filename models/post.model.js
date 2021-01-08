const mongoose = require('mongoose')

const Post = mongoose.model(
    "Post",
    new mongoose.Schema({
        username: String,
        image: String,
        description: String,
        likeCount: {
            type: Number,
            default: []
        },
        comments: [{
            name: '',
            comment: ''
        }],
        createdAt: {
            type: Date,
            default: new Date()
        }
    })
)

module.exports = Post