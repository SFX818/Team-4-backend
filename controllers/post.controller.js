const db = require("../models")

const Post = db.post
const User = db.user

// read /home - find all the post in the database
exports.findAll = (req, res) => {
    Post.find()
        .sort("createdAt")
        .populate("user")
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving all the posts."
            })
        })
}

exports.createPost = (req, res) => {
    const post = new Post(
        req.body.postData
    )
    post.save(err => {
        if (err) {
            res.status(500).send({ message: err })
            return
        }
    })
    User.updateOne(
        { _id: post.user },
        { $addToSet: { posts: [post] } },
        function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    )
}

// read /home/:postId - find a single post with an id
exports.findOne = (req, res) => {
    const postId = req.params.postId
    Post.findById(
        { _id: postId })
        .then((data) => {
            // validation
            if (!data) {
                return res.status(400).send({ message: "Not found post with id" + postId })
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


exports.deletePost = (req, res) => {
    if (!req.userId) {
        res.status(400).send({ message: "You can only delete your own post!" })
    }
    const postId = req.params.postId

    // delete post by the id being passed by id
    Post.deleteOne(
        { _id: postId })
        .then((data) => {
            // validation
            console.log("here is the delete data for deleting!!:", data)
            if (!data) {
                return res.status(400).send({ message: "Not found post with id" + postId })
            }
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while deleting one post"
            })
        })
    User.findByIdAndUpdate(
        { _id: req.userId },
        {
            "$pull": { ObjectId: postId }
        },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    )
}

// update /profile/:postId - update a single comment with an id 
exports.updatePost = (req, res) => {
    if(!req.userId){
        res.status(400).send({message: "You can only update your own post!"})
    }
    const postId = req.params.postId

    const updatedPost = { user, image, description };

    Post.findByIdAndUpdate(
        { _id: postId }, updatedPost, { new: true }
    )
    .then((data) => {
        if(!data) {
            res.status(400).send({message: "Post not found with id" + postId})
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

// update /profile/:postId && /home/:postId
exports.likePost = (req, res) => {
    const postId = req.params.postId

    Post.findByIdAndUpdate(
        { _id: postId }, { $inc: { 'likeCount': 1 } }, { new: true }
    )
    .then((data) => {
        if(!data) {
            res.status(400).send({message: "Post not found with id" + postId})
        } else {
            res.send(data)
        }
    })
    // .catch((err) => {
    //     res.status(500).send({
    //         message:
    //         err.message || "Some error occured while liking this post!"
    //     })
    // })

    // res.json(updatedPost);
}
