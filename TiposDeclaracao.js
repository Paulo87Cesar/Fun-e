console.log(soma(3, 4))

// function declaretion. Esse tipo consegue chamar a função antes de declarar...

function soma (x, y) {
    return x + y        
}  

// function expression 
const sub = function (x, y) {
    return x - y 
}
console.log(sub(3, 4))

//named function expression. Menos comum.  
const mult = function mult(x, y){
    return x * y 
}
console.log(mult(3, 4))