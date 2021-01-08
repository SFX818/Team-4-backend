const db = require("../models")

const Pet = db.pet
const User = db.user
// const JournalEntry = db.journalEntry
// const Milestone = db.milestone

//Find a single pet with an id (GET)
exports.findPet = (req, res) => {
    const id = req.params.petId
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
exports.createPet = (req,res) => {
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
    newPet
        .save(pet)
        .then((data) => {
            res.status(201).send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating a Pet."
            })
        })
    User.pets
    .push(newPet)
    .then((data) => {
    res.status(201).send(data)
    })
    .catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occured while adding pet to user."
        })
    })
}

//Update a pet with id (UPDATE)
exports.updatePet = (req, res) => {
    const id = req.params.petId
    Pet.findByIdAndUpdate(
        {_id: id},
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
            res.status(201).send(data)
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
exports.deletePet = (req, res) => {
    const id = req.params.petId
    User.findByIdandUpdate(
        { _id: req.userId },
        {
            "$pull": { ObjectId: req.body.petId }
        }
    )
    Pet.findByIdAndDelete(
        {_id: id}
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