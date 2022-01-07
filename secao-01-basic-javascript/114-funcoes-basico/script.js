//função sempre executa uma ação

// parâmetros é o que utiliza-se dentro do ()
function saudacao(nome){
  return `Olá mundo da ${nome}!`
}

// para chamar a função precisa do ()
const variavel = saudacao('Emilyn')
console.log(variavel)

function soma (x, y){
  const resultado = x + y //variavel local
  return resultado
}
console.log(soma(3,6))

const resultado = soma(10,5) //variante global
console.log(resultado)


// função anonima
const raiz = function(n){
  return n ** 0.5
}
console.log(raiz(25))

//arrow function
const multiplicar = (n1, n2) => {
  return n1 * n2
}
console.log(multiplicar(2,5))
  //se tiver só 1 linha de codigo dentro da função e 1 unico parametro, tem como escrever como o exemplo abaixo
  const raiz2 = n => n ** 0.5
  console.log(raiz2(16))
