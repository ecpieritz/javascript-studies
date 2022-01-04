/* ******** */
/* Aritméticos: */
/* ******** */

const num1 = 5
const num2 = 12
const num3 = '3'

// adição
console.log(num1 + num2)

// concatenação
console.log(num2 + num3)

// subtração
console.log(num1 - num2)

// divisão
console.log(num1 / num2)

// multiplicação
console.log(num1 * num2)

// potenciação (**)
console.log(num1 ** num2)

// resto da divisão (%)
console.log(num2 % num1)

/* Precedência dos operadores:
      ()
      **
      * / %
      + -
*/

// operador de incremento (++)
let contador = 1
contador++
contador++
contador++
contador++
console.log(`o resultado do contador é: ${contador}`)
console.log(`o resultado do contador é: ${++contador}`)

// operador de decremento (--)
let contador2 = 10
contador2--
contador2--
contador2--
contador2--
console.log(`o resultado do contador2 é: ${contador2}`)
console.log(`o resultado do contador2 é: ${--contador2}`)

// operadores de atribuição (+= -= *= /= **=)
let contador3 = 1
contador3 += 5//contador3 = contador3 + 5

// formas de converter numeros dentro de string para number
const num4 = parseInt('5')
console.log(`num4(${num4}) é do tipo ${typeof num4}`)
const num5 = parseFloat('5.2')
console.log(`num5(${num5}) é do tipo ${typeof num5}`)
const num6 = Number('10.5')
console.log(`num6(${num6}) é do tipo ${typeof num6}`)