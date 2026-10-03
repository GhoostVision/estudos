var agora = new Date()
var hora = agora.getHours()
var mostrar_horas = document.getElementById(`hora`)
var campo_nome = document.getElementById(`campo_nome`)

if (hora < 6) {
  mostrar_horas.innerHTML = `Boa Madrugada, senhor`
}else if( hora < 12){
  mostrar_horas.innerHTML = `Bom Dia, senhor`
}else if(hora < 18){
  mostrar_horas.innerHTML = `Boa Tarde, senhor`
}else{
  mostrar_horas.innerHTML = `Boa Noite, senhor`
}

var modoEscuro = true

function modo_de_tela(){
  
  if(modoEscuro){
    document.body.style.background = `white`
    document.querySelector(`header`).style.background = `rgb(222, 214, 214)`
    document.querySelector(`header`).style.color = `black`
    document.getElementById(`modo_de_tela`).style.background = `white`
    modoEscuro = false
  }else{
    document.body.style.background = `rgb(19, 19, 19)`
    document.querySelector(`header`).style.background = `rgb(63, 55, 55)`
    document.querySelector(`header`).style.color = `white`
    document.getElementById(`modo_de_tela`).style.background = `black`
    modoEscuro = true
  }
}

function enviar_nome(){
  var nome = document.getElementById(`nome`).value
  campo_nome.innerText = nome

  if(nome.trim() == ""){
    window.alert(`Digite um nome valido`)
  }
}
