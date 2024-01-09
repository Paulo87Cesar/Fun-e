
// Duas possibilidades de resolver o this para não variar. 
// Com bind ou criando uma constante, no caso o 'Self' posso nomear como quiser. 


function Pessoa(){
    this.idade = 0 

    const self = this  // com bind não precisar criar essa constante
    setInterval(function(){
        self.idade++  //this.idade++
        console.log(self.idade) // com o bind: (this.idade)
    }/*.bind(this) */,1000)
}
new Pessoa