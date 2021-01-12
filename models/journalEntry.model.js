const mongoose = require('mongoose')

const JournalEntry = mongoose.model(
    "JournalEntry",
    new mongoose.Schema({
        heading: String,
        content: String,
        pet: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Pet"
            }
        ],
        user: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    {timestamps: true})
)

module.exports = JournalEntry