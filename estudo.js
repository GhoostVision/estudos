function verificar(){
    var resposta = document.getElementById(`resposta`)
    var diaSemana = agora.getDay()

    switch (diaSemana) {
        case 0:
            resposta.innerHTML = `Domingo`
            break;
        case 1:
            resposta.innerHTML = `Segunda`
            break;
        case 2:
            resposta.innerHTML = `terca`
            break;

        case 3:
            resposta.innerHTML = `quarta`
            break;

        case 4:
            resposta.innerHTML = `quint`
            break;
        
        case 5:
            resposta.innerHTML = `SEXTA`
            break;

        case 6:
            resposta.innerHTML = `SABADO`
            break;
    
        default:
            resposta.innerHTML = `iNVALIDO`
            break;
    }

    
}