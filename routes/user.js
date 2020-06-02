const userController = require('../controller/userController')
const passport = require('../passport')


module.exports = class userRoutes {
  constructor(app){
    app
    .route('/generico')
    .get(userController.read)
    .post(userController.create)

    app.get(
      "/auth/google",
      passport.authenticate("google", { scope: ["profile", "email"] })
    );
    app.get(
      "/auth/google/callback",
      passport.authenticate("google", { failureRedirect: `/login` }),
      userController.authenticate
    );

    app.get('/auth/facebook',
    passport.authenticate('facebook'));

    app.get(
      "/auth/facebook/callback",
      passport.authenticate("facebook", { failureRedirect: `/login` }),
      userController.authenticate
    );
  }
}













