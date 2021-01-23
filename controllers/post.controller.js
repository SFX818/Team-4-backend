const db = require("../models")

const Post = db.post
const User = db.user

// read /home - find all the post in the database
exports.findAll = (req, res) => {
    Post.find()
        .sort("createdAt")
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
    const post = new Post({
        image: req.body.image,
        description: req.body.description,
        user: req.userId
    })
    console.log(post)
    User.updateOne({ _id: req.userId },
        { $addToSet: { posts: post } })
        .exec((err, user) => {
            console.log(user)
            if (err) {
                res.status(500).send({ message: err })
                return
            }
        }) 
    post.save(err => {
        if (err) {
            res.status(500).send({ message: err })
            return
        }
        res.send("Post created successfully!")
    })
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


// delete /profile/:postId - delete a single post with an id 
exports.deletePost = (req, res) => {
    if(!req.userId){
        res.status(400).send({message: "You can only delete your own post!"})
    }
    const postId = req.params.postId

    User.findByIdAndUpdate(
        { _id: req.userId },
        {
            "$pull": { ObjectId: id }
        },
    )
    // delete post by the id being passed by id
    Post.deleteOne(
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
                    err.message || "Some error occurred while deleting one post"
            })
        })
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

    const post = Post.findByIdAndUpdate(
        { _id: postId }, { likeCount: post.likeCount + 1 }, { new: true }
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
            err.message || "Some error occured while liking this post!"
        })
    })

    res.json(updatedPost);
}
