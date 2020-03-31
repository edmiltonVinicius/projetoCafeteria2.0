const nodemailer = require('nodemailer')
const emailUser = require('./email-user')

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'projetocafeteriadopaulo@gmail.com',
        pass: process.env.PASS_MAIL
    }
})

function mensagemAdm(nome, email, mensagem) {
    return {
        from: 'projetocafeteriadopaulo@gmail.com',
        to: 'edmilton.vinicius2@gmail.com',
        subject: 'Mensagem Recebida Site Cafeteria',
        html: '<h1>Email recebido de ' + nome + '</h1>' +
            '<h3>Email:</h3> ' + email + '<br>' +
            '<h3>Mensagem:</h3> ' + mensagem
    }
}

function mensagemUsuario(email, nome){
    return {
        from: 'projetocafeteriadopaulo@gmail.com',
        to: email,
        subject: 'Obrigadio ' +  nome + ', tmj ♥',
        html: emailUser
    }
}


module.exports = { transport, mensagemUsuario, mensagemAdm }