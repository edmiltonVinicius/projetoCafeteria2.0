let arrayImagens = ["static/dest-img/carrosel01.jpg", "static/dest-img/carrosel02.jpg", "static/dest-img/carrosel03.jpg"]
window.verficiador = 0
let imgHtml = document.getElementById('imagens')

function avancarSlider() {
    if (window.verficiador == 0) {
        imgHtml.src = arrayImagens[0]
        window.verficiador = 1
    } else if (window.verficiador == 1) {
        imgHtml.src = arrayImagens[1]
        window.verficiador = 2
    }
    else {
        imgHtml.src = arrayImagens[2]
        window.verficiador = 0
    }
}
function voltarSlider() {
    if (window.verficiador == 0) {
        imgHtml.src = arrayImagens[2]        
        window.verficiador = 2
    } else if (window.verficiador == 1) {
        imgHtml.src = arrayImagens[1]       
         window.verficiador = 0
    }
    else {
        imgHtml.src = arrayImagens[0]        
        window.verficiador = 1
    }
}

function sliderAutomatico1() {
    document.getElementById('imagens').src = arrayImagens[0]
    window.verficiador = 0
    setTimeout("sliderAutomatico2()", 2000)
}
function sliderAutomatico2() {
    document.getElementById('imagens').src = arrayImagens[1]
    window.verficiador = 1
    setTimeout("sliderAutomatico3()", 2000)
}
function sliderAutomatico3() {
    document.getElementById('imagens').src = arrayImagens[2]
    window.verficiador = 2
    setTimeout("sliderAutomatico1()", 2000)
}