let elem = document.querySelector("#elementoOndeVoceEsta")
let pai = elem.parentElement
pai.style.color = "red"
let primeiroFdoF = document.querySelector("#primeiroFilhoDoFilho").innerHTML = "Testando o teste"
let filho = pai.firstElementChild
let primeiroF = elem.previousSibling
let tex = elem.nextSibling
let tercF = elem.nextElementSibling
tercF = pai.lastElementChild.previousElementSibling