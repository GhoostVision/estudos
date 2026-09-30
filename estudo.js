function verificar() {
    var numero = Number(document.getElementById(`txtnumber`).value)
    var resposta = document.getElementById(`resposta`)
    
    for(var contador = 1;contador <= 10; contador++){
        var resultado = numero * contador
      resposta.innerHTML += `${numero} x ${contador} = ${resultado}<br>`
      
    }
   
}z