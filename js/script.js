
function exibirMenu(){
    let btnExibir = document.querySelector('.botaoExibir').value
    let menu = document.getElementById('idMenuPrincipal')
    menu.style.display = 'block'
}
function esconderMenu(){
    let btnExibir = document.querySelector('.botaoExibir').value
    let menu = document.getElementById('idMenuPrincipal')
    menu.style.display = 'none'
}