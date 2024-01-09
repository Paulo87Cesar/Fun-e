function criarProduto(nome, preco){
    const desconto = 3
    return{
        nome,
        desconto, 
        sub : preco - desconto
    }
}
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Ipad', 1999.49, ))