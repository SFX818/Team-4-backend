// gabe
// renders pet profile & stretch goal components
// CRUD pets

// do pets first!! stretch goals later
// /:username/:pet_id

// /:username/:pet_id/journal

// /:username/:pet_id/milestone

module.exports = app => {
    const tutorials = require('../controllers/pet.controller.js')
    let router = require('express').Router()

    //Render pet profile specific to user
    router.get('/:username/:pet_id', pet.findOne)
    //Form to add pet a pet to user profile
    router.post('/:username/:pet_id', pet.create)
    //Update a pet with id
    router.put('/:username/:pet_id', pet.update)
    //Delete a pet
    router.delete('/:username/:pet_id', pet.delete)
  

    app.use('/:username/:pet_id', router)
}
