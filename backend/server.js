const express = require('express')
const cors = require('cors')

const app = express()


app.use(express.json())
app.use(cors())

require('./config/db')
require('./models/User')
const rotas = require('./routes/userRoutes')
new rotas(app)


const PORT = 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))