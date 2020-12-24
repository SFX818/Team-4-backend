const mongoose = require('mongoose')

const JournalEntry = mongoose.model(
    "JournalEntry",
    new mongoose.Schema({
        heading: String,
        content: String,
    })
)

module.exports = JournalEntry