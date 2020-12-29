// lam
// renders timeline of posts 
// get posts (findAll)
const posts = require("../controllers/post.controller")
let router = require("express").Router();

module.exports = function(app) {
    // get /home to render all posts
    // router.get("/home", posts.findAll)
    router.get("/", posts.findAll)

    // home route to connect to express & router method
    app.use('/home', router)
}
