// lam
// renders timeline of posts 
// get posts (findAll)

module.exports = app => {
    const posts = require("../controllers/post.controller")
    let router = require("express").Router();

    // get /home to render all posts
    // router.get("/home", posts.findAll)
    router.get("/home", posts.findAll)

    // double check this
    app.use("/home", router)
}
