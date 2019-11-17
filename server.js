const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const compression = require('compression')
const porta = 3000
const rotas = require('./routers')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname, + 'static'))
app.use(compression())

app.use('/', rotas)
app.use('/sobrenos.html', rotas)
app.use('/nosso-cardapio.html', rotas)
app.use('/contato.html', rotas)


app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}.`))