const userService = require('../service/userService')


class userController {
  static async read(req, res){
    try {
      
      const response = await userService.read('UserGenerico')

      res.send({ response })

    } catch (error) {
      res.status(error.status).send(error.data)
    }

  }
  static async create(req, res){
    try {
      
      const response = await userService.create('UserGenerico', req.body)

      res.send({ response })

    } catch (error) {
      res.status(error.status).send(error.data)
    }
  }

  static async authenticate(req, res)  {
    try {
      let response = await userService.authenticate(req.user);
      res.send(response).status(200);
    } catch (error) {
      const message = {message:'Falha ao logar!'}
      res.status(500).send(message);
    }
  }

}


module.exports = userController