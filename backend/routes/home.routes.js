// lam
// renders timeline of posts 
// get posts (findAll)

const posts = require("../controllers/post.controller")
let router = require("express").Router();

module.exports = app => {
    router.get("/home", posts.findAll)

    // double check this
    app.use("/home", router)
}
