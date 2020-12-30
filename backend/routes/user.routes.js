const { authJwt } = require('../middlewares')
const controller = require('../controllers/user.controller')

module.exports = function(app) {
    app.use((req, res, next) => {
        //Set header and allow use of x access token (we will use this to pass our token)
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token', Origin, Content-type, Accept"
        )
        next()
    })

    app.get('/', controller.allAccess)

    app.get('/about', [controller.allAccess, controller.About])

    app.get("/api/test/admin", [authJwt.verifyWebToken, authJwt.isAdmin],
    controller.adminBoard
    )
    //user goes to own page
    app.get('/:username', [authJwt.verifyWebToken], controller.userBoard)
    //user is grabbing the specific post
    app.get('/:username/:postId', [authJwt.verifyWebToken], posts.findOne)
    //renders form to create a post
    app.post('/:username/post', [authJwt.verifyWebToken], posts.create)
    //update post
    app.put('/:username/:postId', [authJwt.verifyWebToken], posts.update)
    //delete
    app.delete('/:username/:postId', [authJwt.verifyWebToken], posts.delete)
}   