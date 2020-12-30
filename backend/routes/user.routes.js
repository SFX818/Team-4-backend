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

    // user profile - is the findUserPet handler necessary?
    app.get('/:userId', [authJwt.verifyWebToken], [controller.userBoard, controller.findUserPets])
    
    // user is grabbing their specific post
    app.get('/:userId/:postId', [authJwt.verifyWebToken], posts.findOne)
    
    // renders form to create a post
    app.post('/:userId/post', [authJwt.verifyWebToken], posts.create)
    
    // update post
    app.put('/:userId/:postId', [authJwt.verifyWebToken], posts.update)
    
    // delete
    app.delete('/:userId/:postId', [authJwt.verifyWebToken], posts.delete)
}   