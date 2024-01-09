const pessoa = {
  saudacao: 'Bom dia!', 
  falar(){
    console.log(this.saudacao)
  }
}
pessoa.falar() // aqui funciona normal

/*  const falar = pessoa.fala
falar() 
assim não funciona, confitlo do paradigma funcional e OO  */
 
const falar = pessoa.falar.bind(pessoa) // o bind resolve o this
falar()