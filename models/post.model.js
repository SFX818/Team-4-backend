const mongoose = require('mongoose')

const Post = mongoose.model(
    "Post",
    new mongoose.Schema({
        image: String,
        description: String,
        user: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        likeCount: {
            type: Number,
            default: 0
        },
        comments: [
            {
                name: '',
                comment: ''
            }
        ],
        createdAt: {
            type: Date,
            default: new Date()
        }
    })
)

module.exports = Post