const express = require('express')
const router = express.Router()

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
router.get('/contato.html', (req, res) => {
    console.log('Bateu na página contato')
    res.sendFile(__dirname + '/html/contato.html', err => {
        if(err){
            res.send('<p>Desculpe página não encontrada')
        }
    })
})
router.post('/contato.html', (req, res) => {
    console.log('POST enviado para o servidor')
    res.redirect('/')
})

module.exports = router