const mongoose = require("mongoose")

mongoose.connect(`mongodb://root:passwordRoot@173.10.0.2:27017`, {

      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .catch((err) => console.log("error: " + err))

const db = mongoose.connection

db.once('open', () => console.log("Banco de dados funcionando ..."))


module.exports = mongoose;