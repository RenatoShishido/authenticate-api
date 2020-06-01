const mongoose = require('mongoose')

class userService{
  static async read(model_name) {
    try {
      
      return  await mongoose.model(model_name).find()

    } catch (error) {
      console.log(error)
    }
  }

  static async create(model_name ,content) {
    try {
      
      return await mongoose.model(model_name).create(content)

    } catch (error) {
      console.log(error)
    }
  }

}


module.exports = userService