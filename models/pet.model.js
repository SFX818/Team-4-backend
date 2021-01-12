const mongoose = require('mongoose')

const Pet = mongoose.model(
    "Pet",
    new mongoose.Schema({
        name: String,
        breed: String,
        birthday: Date,
        species: String,
        image: String,
        user: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        journalEntries: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "JournalEntry"
            }
        ],
        milestones: []
    })
)

module.exports = Pet