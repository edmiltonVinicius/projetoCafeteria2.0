const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const compression = require('compression')
const rotas = require('./rotas')
const porta = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname, + 'static'))
app.use(compression())

app.use('/', rotas)
app.use('/sobreNos.html', rotas)
app.use('/nossocardapio.html', rotas)
app.use('/contato.html', rotas)


app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}.`))