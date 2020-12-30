const db = require('../models')
const Pet = db.pet

//         name: String,
//         breed: String,
//         birthday: Date,
//         species: String,
//         image: String,

//Find a single Tutorial with an id (GET)
exports.findOne = (req, res) => {
    const id = req.params.id
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
    if(!req.body.title){
        res.status(400).send({message: "Title cannot be empty!"})
    }
    //Create a pet
    const pet =  new Pet({
        name: req.body.name,
        breed: req.body.breed,
        // birthday: ,
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
    const id = req.params.id
    Tutorial.findByIdAndUpdate(
        {_id: id},
        {name: req.body.name},
        {breed: req.body.breed}, 
        // {birthday: req.body.birthday}, 
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
    const id = req.params.id
    Pet.findByIdAndDelete(
        {_id: id},
        {name: req.body.name},
        {breed: req.body.breed}, 
        // {birthday: req.body.birthday}, 
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
