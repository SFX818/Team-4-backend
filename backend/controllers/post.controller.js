// trez
// lam does "find all" for home route
const db = require("../models")

const Post = db.post

exports.findAll = (req, res) => {
    // Find all the post in the database
    Post.find()
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving all the posts."
            })
        })
}