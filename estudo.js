let contador = document.getElementById(`Contador`)

function iniciarevento(){
 conatador_bomba = setTimeout(function(){
    document.body.style.background = `red`
    contador.innerText = `Explodiu tudo parceiro`
 }, 10000)
}

let senha = 1234
let campo_senha = document.getElementById(`campo_senha`).value

function enviar_senha(){
    if (campo_senha == senha){
        clearTimeout(conatador_bomba)
        contador.innerText = `Bomba desativada`
        return
    }
}