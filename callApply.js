function getPreco (imposto = 0, moeda = 'R$'){
        return `${moeda} ${this.preco * ( 1 - this.desc) * (1 + imposto)}`
}

const produto = {
     nome: 'Notebook',
     preco: 4589,
     desc:0.15,
     getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //assim chama o this no contexto global!

console.log(produto.getPreco()) // chamando o getPreco a partir do objeto.
 
// Executando a função com call e apply

const carro = {preco: 49990, desc: 0.20} // objeto 

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))  // a diferente é a forma que passa os parametros 
console.log(getPreco.apply[carro, 0.17, '$'])// call diretamente dentro da função e o apply dentro de um array 