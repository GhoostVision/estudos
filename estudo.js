function evento(){
    var vermelho = window.document.getElementById(`vermelho`)
    vermelho.innerHTML = `Clicou`
    vermelho.style.color = `green`
}

function passar(){
    var meio = window.document.getElementById(`meio`)
    meio.style.backgroundColor = `red`
}

function sair(){
    var meio = window.document.getElementById(`meio`)
    meio.style.backgroundColor = `blue`
}