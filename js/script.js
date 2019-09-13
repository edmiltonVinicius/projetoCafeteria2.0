
function exibirMenu(){
    let btnExibir = document.querySelector('.botaoExibir').value
    let menu = document.getElementById('idMenuPrincipal')
    menu.style.display = 'block'
    btnExibir.style.display = 'none'
}
function esconderMenu(){
    let btnExibir = document.querySelector('.botaoExibir').value
    let menu = document.getElementById('idMenuPrincipal')
    menu.style.display = 'none'
    btnExibir.style.display = 'block'
}