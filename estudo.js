let comprar = 10

const jogo = {
    nome:`Cyberpunk 2077`,
    plataforma:`Console e Pc`,
    preco: 300,
    Estoque: 10,
    comprar: function(){
        if(comprar > this.Estoque){
            return `Imposivel comprar`
        }

        this.preco *= comprar
        return `${this.preco}`
    },
    verificar_estoque: function(){
        if (comprar > this.Estoque){
            return `Estoque insuficiente ${this.Estoque}`
        }
        this.Estoque -= comprar 

        return this.Estoque
    },

    mostra_resultado: function(){
        if(comprar > this.Estoque){
            return `Impossivel realizar compra`
        }
        return `Voce deseja comprar o jogo ${jogo.nome}, compativer com as platafomas de ${jogo.plataforma}, pelo preco de ${jogo.preco}, aonde ficarar ${jogo.comprar()} e voce comparar ${jogo.Estoque} do estoque sobrando ${jogo.verificar_estoque()} do estoque`
    }

 }

 console.log(jogo.mostra_resultado())

