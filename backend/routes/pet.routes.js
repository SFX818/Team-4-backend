// gabe
// renders pet profile & stretch goal components
// CRUD pets

const user = require("../controllers/post.controller")
const pet = require("../controllers/pet.controller")
const journalEntry = require("../controllers/journalEntry.controller")
const milestone = require("../controllers/milestone.controller")
let router = require("express").Router();

// do pets first!! stretch goals later
// /:username/:pet_id

// /:username/:pet_id/journal

// /:username/:pet_id/milestone

module.exports = function(app) {
    // get user's pet's profile to render journal entries
    router.get("/", pet.findAllJournals, pet.findAllMilestones)

    // post route for user's pet's journal entry
    router.post("/journal", journalEntry.create)

    // update route for user's pet's journal entry
    router.update("/:journal_id", journalEntry.update)
    
    // delete route for user's pet's journal entry
    router.delete("/:journal_id", journalEntry.delete)

    // post route for user's pet's milestone
    router.post("/milestone", milestone.create)

    // update route for user's pet's milestone
    router.update("/:milestone_id", milestone.update)
    
    // delete route for user's pet's milestone
    router.delete("/:milestone_id", milestone.delete)

    // pet route to connect to express & router method
    app.use('/:username/:pet_id', router)
}
