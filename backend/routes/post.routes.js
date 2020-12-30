// /:postId
const posts = require("../controllers/post.controller")
const comment = require('../controllers/comment.controller')

module.exports = app => {
    // get all user's profile
    router.get("/", posts.findAll)

    // post route for user's pet's journal entry
    router.get("/:postId", posts.findOne)
    //user's are able to comment on post
    router.post('/:postId/comment', comment.create)
    // pet route to connect to express & router method
    app.use('/home', router)
}