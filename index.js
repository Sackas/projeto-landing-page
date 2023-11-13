var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

var banner1 = window.document.getElementById("banner1")
var banner2 = window.document.getElementById("banner2")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    setaDireita.style = "display:flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}



function RolarParaDireita2() {
    banner1.style = "display:none"
    banner2.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex;"
}

function RolarParaEsquerda2() {
    
    banner1.style = "display:flex"
    banner2.style = "display:none"
    setaDireita.style = "display:flex;"
    setaEsquerda.style = "display:none"
}