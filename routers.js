const express = require('express')
const nodemailer = require('nodemailer') 
const router = express.Router()
const bodyParser = require('body-parser')
const sendEmail = require('./email/send-email')

//  INDEX
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html', err => {
        if(err){
            res.send('<p>Desculpe página não encontrada')
        }
    })
})

router.get('/index', (req, res) => {
    res.sendFile(__dirname + '/html/index.html', err => {
        if(err){
            res.send('<p>Desculpe página não encontrada')
        }
    })
})

// SOBRE NOS 
router.get('/sobre-nos', (req, res) => {
    res.sendFile(__dirname + '/html/sobre-nos.html', err => {
        if(err){
            res.send('<p>Desculpe página não encontrada')
        }
    })
})

// CARDAPIO 
router.get('/nosso-cardapio', (req, res) => {
    res.sendFile(__dirname + '/html/nosso-cardapio.html', err => {
        if(err){
            res.send('<p>Desculpe página não encontrada')
        }
    })
})

// CONTATO
router.route('/contato')
    .get((req, res) => {
        res.sendFile(__dirname + '/html/contato.html', err => {
            if(err){
                res.send('<p>Desculpe página não encontrada')
            }
        })
    })
    .post((req, res, next) => {
        const nome = req.body.nomeUsuario
        const email = req.body.emailUsuario
        const mensagem = req.body.mensagemUsuario
        const mensagemUsuario = sendEmail.mensagemUsuario(email, nome)
        const mensagemAdministrador = sendEmail.mensagemAdm(nome, email, mensagem)

        sendEmail.transport.sendMail(mensagemAdministrador, (erro, inf) => {
            if(erro){
                console.log(erro)
            }else {
                console.log('Email enviado para o administrador enviado!')
            }
        })

        sendEmail.transport.sendMail(mensagemUsuario, (erro, inf) => {
            if(erro){
                console.log(erro)
            }else {
                console.log('Email enviado para o usuário enviado!')
            }
        })
        res.redirect('/')
    })

module.exports = router