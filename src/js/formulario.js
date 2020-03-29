function validacaoFormulario(){
    const nome = document.formularioContato.nomeUsuario.value
    const email = document.formularioContato.emailUsuario.value
    const mensagem = document.formularioContato.mensagemUsuario.value
    
    const usuarioEmail = email.substring(0, email.indexOf('@')+1)
    const provedorEmail = email.substring(email.indexOf('@')+1, email.length)

    if((nome === ' ') || (nome.length < 3) || (nome === null)){
        alert('Nome inválido, por favor digite um nome válido!')
        formularioContato.nomeUsuario.focus()
        return false
    }

    if ((usuarioEmail.indexOf('@') == -1) || 
        (usuarioEmail.length < 3) ||
        (provedorEmail.indexOf('.') == -1) ||
        (provedorEmail.length < 3)){
            alert('E-mail digitado inválido!')
            return false
        } else {
            Console.log('Formulário enviado com sucesso!')
        }
    
    if(mensagem.length < 3){
        alert('Há, me mande uma mensagem maior :)')
    }
}