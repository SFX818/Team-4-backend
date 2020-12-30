// gabe
const db = require("../models")
const Pet = db.pet
const JournalEntry = db.journalEntry
const Milestone = db.milestone

//Find a single Tutorial with an id (GET)
exports.findOne = (req, res) => {
    const id = req.params.pet_id
    const userId = req.params.username
    //Find pet by the id being passed by id
    Pet.findById(id).then((data) => {
        if(!data) {
            res.status(400).send({message: "Pet not found with id" + id})
        } else {
            res.send(data)
        }
    })
}

//Create and save pet (POST)
exports.create = (req,res) => {
    //Validate request
    if(!req.body.name){
        res.status(400).send({message: "Name cannot be empty!"})
    }
    //Create a pet
    const pet =  new Pet({
        name: req.body.name,
        breed: req.body.breed,
        birthday: req.body.birthday,
        species: req.body.species,
        image: req.body.image

    })
    // Save Pet in the database
    pet
        .save(pet)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating a Pet."
            })
        })
}

//Update a pet with id (UPDATE)
exports.update = (req, res) => {
    const id = req.params.pet_id
    Tutorial.findByIdAndUpdate(
        {pet_id: id},
        {name: req.body.name},
        {breed: req.body.breed}, 
        {birthday: req.body.birthday}, 
        {species: req.body.species}, 
        {image: req.body.image}, 
    )
    .then((data) => {
        if(!data) {
            res.status(400).send({message: "Pet not found with id" + id})
        } else {
            res.send(data)
        }
    })
    .catch((err) => {
        res.status(500).send({
            message:
            err.message || "Some error occured while updating the pet!"
        })
    })
}

//Delete a pet with id (DELETE)
exports.delete = (req, res) => {
    const id = req.params.pet_id
    Pet.findByIdAndDelete(
        {pet_id: id},
        {name: req.body.name},
        {breed: req.body.breed}, 
        {birthday: req.body.birthday}, 
        {species: req.body.species}, 
        {image: req.body.image},
    )
    .then((data) => {
        if(!data) {
            res.status(400).send({message: "Pet not found with id" + id})
        } else {
            res.send("Pet deleted!")
        }
    })
    .catch((err) => {
        res.status(500).send({
            message:
            err.message || "Some error occured while deleting the Pet!"
        })
    })
}