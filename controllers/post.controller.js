const db = require("../models")

const Post = db.post
const User = db.user

// read /home - find all the post in the database
exports.findAll = async (req, res) => {
    await Post.find()
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving all the posts."
            })
        })
}

// read /home/:postId - find a single post with an id
exports.findOne = (req, res) => {
    const postId = req.params.postId;
    Post.findById(
        { _id: postId })
        .then((data) => {
            // validation
            if (!data) {
                return res.status(400).send({ message: "Not found post with id" + id })
            } else {
                res.send(data)
            }
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while finding one post"
            })
        })
}

// post /:userId/post - create a post
exports.create = (req,res) => {
    // make sure to write it out later
    const post = req.body
    //Validate request
    if(!req.body.name){
        res.status(400).send({message: "Name cannot be empty!"})
    }
    //Create a post
    const newPost =  new Post(post)
    // Save Post in the database
    newPost
        .save()
        .then((data) => {
            res.status(201).send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating a Pet."
            })
        })
}

// delete /:userId/:postId - delete a single post with an id 
exports.delete = (req, res) => {
    if(!req.userId){
        res.status(400).send({message: "You can only delete your own post!"})
    }
    User.findByIdandUpdate(
        { _id: req.userId },
        {
            "$pull": { ObjectId: req.body.postId }
        }
    )
    // delete post by the id being passed by id
    Post.deleteOne(
        { _id: postId })
        .then((data) => {
            // validation
            if (!data) {
                return res.status(400).send({ message: "Not found post with id" + id })
            } else {
                res.send(data)
            }
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while deleting one post"
            })
        })
}

// update /:userId/:postId - update a single comment with an id 
exports.update = (req, res) => {
    if(!req.userId){
        res.status(400).send({message: "You can only update your own post!"})
    }
    const id = req.params.postId
    Post.findByIdAndUpdate(
        {_id: id},
        {image: req.body.image},
        {description: req.body.description}, 
    )
    .then((data) => {
        if(!data) {
            res.status(400).send({message: "Post not found with id" + id})
        } else {
            res.send(data)
        }
    })
    .catch((err) => {
        res.status(500).send({
            message:
            err.message || "Some error occured while updating this post!"
        })
    })
}

