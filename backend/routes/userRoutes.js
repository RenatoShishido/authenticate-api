const userController = require('../controller/userController')

class userRoutes {
  constructor(app){
    app
    .route('/generico')
    .get(userController.read)
    .post(userController.create)

  }
}




module.exports = userRoutes












