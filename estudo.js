function verificar(){
    var maior_idade = document.getElementById(`maior-18`)
    var menor_idade = document.getElementById (`menor-18`)
    var txtjogo = document.getElementById(`txtnome`)
    var txtidade = document.getElementById(`txtidade`)
    var nome_jogo = txtjogo.value
    var idade_usuario = Number(txtidade.value)
    var reposta = document.getElementById(`resposta`)

    if (idade_usuario >= 18 ){
        reposta.innerHTML = `Parabens por comprar ${nome_jogo}, voce possui a idade suficiente ${idade_usuario}`
    }else{
        reposta.innerHTML = `Infelizmente voca nao pode comprar ${nome_jogo} pois possui a idade ${idade_usuario}`
    }
}