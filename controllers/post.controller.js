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
exports.findOne = async (req, res) => {
    const postId = req.params.postId;
    await Post.findById(
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

// post /profile/post - create a post
exports.createPost = (req,res) => {
    // make sure to write it out later
    const user_id = req.userId
    const { username, image, description } = req.body;
    //Validate request
    if(!req.body.username){
        res.status(400).send({message: "Username cannot be empty!"})
    }
    //Create a post
    const newPost = new Post({ user_id, username, image, description })
    // Save Post in the database
    newPost
        .save()
        .then((data) => {
            res.status(201).send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating a post."
            })
        })
    User.posts
        .push(newPost)
        .then((data) => {
        res.status(201).send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while adding post to user."
            })
        })
}


// delete /profile/:postId - delete a single post with an id 
exports.deletePost = (req, res) => {
    if(!req.userId){
        res.status(400).send({message: "You can only delete your own post!"})
    }
    const { id } = req.params

    User.findByIdAndUpdate(
        { _id: req.userId },
        {
            "$pull": { ObjectId: id }
        }
    )
    // delete post by the id being passed by id
    Post.deleteOne(
        { _id: id })
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
    const { id } = req.params

    const updatedPost = { username, image, description, _id: id };

    Post.findByIdAndUpdate(
        { _id: id }, updatedPost, { new: true }
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
    const { id } = req.params

    const post = Post.findByIdAndUpdate(
        { _id: id }, { likeCount: post.likeCount + 1 }, { new: true }
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
