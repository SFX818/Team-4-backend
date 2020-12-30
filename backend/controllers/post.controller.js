const db = require("../models")
const Post = db.post

exports.findAll = async (req, res) => {
    // Find all the post in the database
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

exports.findOne = (req, res) => {
    // Find a single post in the database
    const postId = req.params.postId;
    // delete tutorial by the id being passed by id
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

// help
// delete /home/:postId/:commentId - delete a single comment with an id 
exports.delete = (req, res) => {
    const postId = req.params.postId;
    const id = req.params.commentId
    // delete tutorial by the id being passed by id
    Comment.deleteOne(
        { _id: id })
        .then((data) => {
            // validation
            if (!data) {
                return res.status(400).send({ message: "Not found comment with id" + id })
            } else {
                res.send(data)
            }
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while deleting one comment"
            })
        })
}