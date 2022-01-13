/*
&& - em uma expressão, se todos os valores forem TRUE, ele retorna o ultimo valor TRUE; caso tenha algum valor FALSE, ele para no false e mostra o valor do FALSE
|| - em uma expressão, ele vai retornar o valor da primeira variante TRUE que encontra, pois ele precisa apenas de 1 valor verdadeiro para retornar
      se todos os valores retornarem FALSE, aparecerá o valor do último FALSE


Valores que avaliam FALSE
  false
  0
  '' - string vazia
  null
  undefined
  NaN

Qualquer coisa fora desses valores, avalia em True no JS
*/


// utilizando &&
console.log('Emilyn' && NaN && 'Pieritz')


function falaOi(){
  return 'oi'
}

const vaiExecutar = false

console.log(vaiExecutar && falaOi())

// utilizando ||
console.log(0 || null || false || 'Emilyn' || true)

const corUsuario = null
const corPadrao = corUsuario || 'black'

console.log(corPadrao)