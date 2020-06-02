const express = require('express')
const cors = require('cors')
const passport_config = require('./passport')
const passport = require('passport')

const app = express()

app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(cors())

require('./config/db')
require('./models/UserGenerico')



const rotas = require('./routes/user')
new rotas(app)


app.get('/', (req, res) => {
  res.json({
      project: "API_AUTENTICAÇÃO",
      version: "teste",
      author: "RenatoShishido",
      rotas:['/google','/facebook']
  });
})


const PORT = 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))