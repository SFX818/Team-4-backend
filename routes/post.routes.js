const posts = require("../controllers/post.controller")
const comment = require('../controllers/comment.controller')

let router = require("express").Router();

module.exports = app => {
    // get all existing posts
    router.get("/", posts.findAll)

    // get route for a specific post + form for comments
    router.get("/:postId", posts.findOne)
    
    // post route to create a comment
    router.post('/:postId/comment', comment.create)
    
    // pet route to connect to express & router method
    app.use('/home', router)
}