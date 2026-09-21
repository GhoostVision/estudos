var nomeJogo = String(window.prompt(`Qual jogo voce quer buscar?`));
var generoJogo = window.prompt(`Qual e o genero dele?`);
var precoJogo = Number(window.prompt(`Qual preco voce gostaria de comprar?`));
var lanacamentoJogo = window.prompt(`Quando foi lancado?`);

window.alert(`Seu jogo e ${nomeJogo.toUpperCase()}, ele possui ${nomeJogo.length} caracteres, o genero e ${generoJogo.toLowerCase()} o preco e de RS$ ${precoJogo.toFixed(2)}, lancado em ${lanacamentoJogo}`)
