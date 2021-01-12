const mongoose = require('mongoose')

const Milestone = mongoose.model(
    "Milestone",
    new mongoose.Schema({
        event: String,
        description: String,
        date: Date,
        pet: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Pet"
            }
        ]
    },
    {timestamps: true})
)

module.exports = Milestone