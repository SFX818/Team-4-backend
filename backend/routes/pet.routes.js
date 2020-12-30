const user = require("../controllers/post.controller")
const pet = require("../controllers/pet.controller")
const journalEntry = require("../controllers/journalEntry.controller")
const milestone = require("../controllers/milestone.controller")
let router = require("express").Router();

module.exports = function(app) {
    // get user's pet's profile to render journal entries
    router.get("/", pet.findAllJournals, pet.findAllMilestones)

    // post route for user's pet's journal entry
    router.post("/journal", journalEntry.create)

    // update route for user's pet's journal entry
    router.update("/:journalId", journalEntry.update)
    
    // delete route for user's pet's journal entry
    router.delete("/:journalId", journalEntry.delete)

    // post route for user's pet's milestone
    router.post("/milestone", milestone.create)

    // update route for user's pet's milestone
    router.update("/:milestoneId", milestone.update)
    
    // delete route for user's pet's milestone
    router.delete("/:milestoneId", milestone.delete)

    // pet route to connect to express & router method
    app.use('/:userId/:petId', router)
}
