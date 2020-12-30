const user = require("../controllers/post.controller")
const pet = require("../controllers/pet.controller")
const journalEntry = require("../controllers/journalEntry.controller")
const milestone = require("../controllers/milestone.controller")
let router = require("express").Router();


// do pets first!! stretch goals later
// /:username/:pet_id

module.exports = app => {

    // get user's pet's profile to render journal entries
    router.get("/:pet_id", pet.findAllJournals, pet.findAllMilestones, pet.findOne)

    //Form to add pet a pet to user profile
    router.post('/pet', pet.create)
    
    //Update a pet with id
    router.put('/:pet_id', pet.update)

    //Delete a pet
    router.delete('/:pet_id', pet.delete)

    // post route for user's pet's journal entry
    router.post("/:pet_id/journal", journalEntry.create)

    // update route for user's pet's journal entry
    router.update("/:pet_id/:journal_id", journalEntry.update)
    
    // delete route for user's pet's journal entry
    router.delete("/:pet_id/:journal_id", journalEntry.delete)

    // post route for user's pet's milestone
    router.post("/:pet_id/milestone", milestone.create)

    // update route for user's pet's milestone
    router.update("/:pet_id/:milestone_id", milestone.update)
    
    // delete route for user's pet's milestone
    router.delete("/:pet_id/:milestone_id", milestone.delete)


    app.use('/:username', router)
}
