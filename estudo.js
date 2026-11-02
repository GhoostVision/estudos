let contador = document.getElementById(`Contador`)

function iniciarevento(){
 conatador_bomba = setTimeout(function(){
    document.body.style.background = `red`
    contador.innerText = `Explodiu tudo parceiro`
 }, 10000)
}

let senha = 1234

function enviar_senha(){
    let campo_senha = document.getElementById(`campo_senha`).value
    if (campo_senha == senha){
        clearTimeout(conatador_bomba)
        contador.innerText = `Bomba desativada`
        return
    }
}