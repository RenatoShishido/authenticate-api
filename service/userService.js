const mongoose = require('mongoose')

module.exports = class userService{
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

  static async authenticate(req) {
    try {
      const name = req.provider == "google" ? req.username : req.displayName;
      let formatted_user = {
        name: name,
        email: req.emails ? req.emails[0].value : "",
      };
      return { formatted_user: formatted_user, original_user: req };

    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}

