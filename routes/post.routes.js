// const { authJwt } = require('../middlewares')
const posts = require("../controllers/post.controller")
const comment = require('../controllers/comment.controller')

let router = require("express").Router();

module.exports = app => {
    // get all existing posts
    router.get("/", posts.findAll)

    // get route for a specific post + form for comments
    router.get("/:postId", posts.findOne)

    // post route to create new post
    router.post('/upload', posts.createPost)

    // put route for likes on a specific post
    router.put('/:postId/likePost', posts.likePost);

    // delete route for likes on a specific post
    router.delete('/:postId', posts.deletePost)
    
    // // post route to create a comment
    // router.post("/:postId/comment", comment.create)

    // // delete route for comments
    // router.delete('/:postId/:commentId', comment.delete)
    
    // pet route to connect to express & router method
    app.use('/home', router)
}