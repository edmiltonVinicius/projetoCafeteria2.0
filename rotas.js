const express = require('express')
const router = express.Router()
const fs = require('fs')

//  INDEX
router.get('/', (req, res) => {
    console.log('Bateu na raiz do projeto')
    res.sendFile(__dirname + '/html/index.html', err => {
        if(err){
            res.send('<p>Desculpe página não encontrada')
        }
    })
})

router.get('/index.html', (req, res) => {
    console.log('Bateu na raiz do projeto')
    res.sendFile(__dirname + '/html/index.html', err => {
        if(err){
            res.send('<p>Desculpe página não encontrada')
        }
    })
})

// SOBRE NOS 
router.get('/sobrenos.html', (req, res) => {
    console.log('Bateu na página sobre nós')
    res.sendFile(__dirname + '/html/sobreNos.html', err => {
        if(err){
            res.send('<p>Desculpe página não encontrada')
        }
    })
})

// CARDAPIO 
router.get('/nossocardapio.html', (req, res) => {
    console.log('Bateu na página nosso cardápio')
    res.sendFile(__dirname + '/html/nossoCardapio.html', err => {
        if(err){
            res.send('<p>Desculpe página não encontrada')
        }
    })
})

// CONTATO
router.route('/contato.html')
    .get((req, res) => {
        console.log('Bateu na página contato')
        res.sendFile(__dirname + '/html/contato.html', err => {
            if(err){
                res.send('<p>Desculpe página não encontrada')
            }
        })
    })
    .post((req, res, next) => {
        console.log('POST enviado para o servidor')
        nome = req.body.nomeUsuario
        email = req.body.emailUsuario
        mensagem = req.body.mensagemUsuario
        fs.writeFile(__dirname + '/arquivosUsuarios/user_' + nome + '.txt', 
        `Visitante: ${nome}, email: ${email} e a mensagem: ${mensagem}`, 
        'utf-8', err => {
            console.log(err || 'Arquivos salvo!')
        })
        res.redirect('/')
    })

module.exports = router