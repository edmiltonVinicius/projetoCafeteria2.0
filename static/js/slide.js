let arrayImagens = ["static/imagens/carrosel01.jpg", "static/imagens/carrosel02.jpg", "static/imagens/carrosel03.jpg"]
let verficiador = 0
let imgHtml = document.getElementById('imagens')

function avancarSlider() {
    if (this.verficiador == 0) {
        imgHtml.src = arrayImagens[0]
        this.verficiador = 1
    } else if (this.verficiador == 1) {
        imgHtml.src = arrayImagens[1]
        this.verficiador = 2
    }
    else {
        imgHtml.src = arrayImagens[2]
        this.verficiador = 0
    }
}
function voltarSlider() {
    if (this.verficiador == 0) {
        imgHtml.src = arrayImagens[2]        
        this.verficiador = 2
    } else if (this.verficiador == 1) {
        imgHtml.src = arrayImagens[1]       
         this.verficiador = 0
    }
    else {
        imgHtml.src = arrayImagens[0]        
        this.verficiador = 1
    }
}

function sliderAutomatico1() {
    document.getElementById('imagens').src = arrayImagens[0]
    this.verficiador = 0
    setTimeout("sliderAutomatico2()", 2000)
}
function sliderAutomatico2() {
    document.getElementById('imagens').src = arrayImagens[1]
    this.verficiador = 1
    setTimeout("sliderAutomatico3()", 2000)
}
function sliderAutomatico3() {
    document.getElementById('imagens').src = arrayImagens[2]
    this.verficiador = 2
    setTimeout("sliderAutomatico1()", 2000)
}