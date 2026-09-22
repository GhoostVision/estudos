var jogoNome = window.prompt(`Digite o nome do jogos`)
var jogoIdade = Number(window.prompt(`Digite e a sua idade`))
var jogoPreco = Number(window.prompt(`Digite o preco`))
var exibirIdade = jogoIdade >= 18 ? `PODE JOGAR PELA IDADE` : `NAO PODE JOGAR PELA IDADE`
var valorExebir = jogoPreco >= 100 ? `PRECO ALTO` : `PRECO BAIXO`

window.alert(`JOGO: ${jogoNome.toUpperCase()}, SEU JOGO TEM:${jogoNome.length} CARACTRES, POSSUI O PRECO: R$ ${jogoPreco.toFixed(2).replace(".",",")}, CLASSIFICADO PRECO COMO:${valorExebir}, E VOCE ${exibirIdade}`)