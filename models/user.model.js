const mongoose = require('mongoose')

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post"
            }
        ],
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
        ],
        journalEntries: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "JournalEntry"
            }
        ],
        pets: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Pet"
            }
        ],
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
)

module.exports = User