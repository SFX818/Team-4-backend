const { comment } = require("../models");
const db = require("../models")

const Comment = db.comment

// get /home/:post_id - renders all comments for specific post
exports.findAll = (req, res) => {    
    const postId = req.params.id
    Comment.find()
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving comments"
            })
        })
}

// post /home/:post_id/comment - creates a comment for specific post
exports.create = (req, res) => {
    if(!req.body.username){
        res.status(400).send({ message: "Please enter your username!"})
        return;
    }
    const postId = req.params.id;
    const comment = new Comment({
        username: req.body.username,
        content: req.body.content,
        postId: postId
    })
    comment
        .save(comment)
        .then((data) => {
            res.send(data)
        })
        // catches any errors
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating a comment!"
            })
        })
}

// delete /home/:post_id/:comment_id - delete a single comment with an id 
exports.delete = (req, res) => {
    const postId = req.params.postId;
    const id = req.params.id
    // delete tutorial by the id being passed by id
    Comment.deleteOne(
        { _id: id })
        .then((data) => {
        // validation
        if(!data){
            return res.status(400).send({ message: "Not found comment with id" + id})
        } else{
            res.send(data)
        }
    }).catch((err) => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while deleting one comment"
        })
    })
}