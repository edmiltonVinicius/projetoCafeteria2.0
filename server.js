const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const porta = process.env.PORT || 3000
const rotas = require('./routers')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname, + 'static'))

app.use('/', rotas)
app.use('/sobre-nos', rotas)
app.use('/nosso-cardapio', rotas)
app.use('/contato', rotas)


app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}.`))