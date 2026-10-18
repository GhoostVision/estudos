function dinheiro_renda (salario){
    if (salario < 1000){
        return `Liberar auxilio`
    }

    return `Negado auxilio`;
}


document.getElementById(`texto`).innerHTML = dinheiro_renda(2000)