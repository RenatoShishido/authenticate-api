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


}


module.exports = userController