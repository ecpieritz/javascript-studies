let num1 = 10
let num2 = 2.25
let num3 = 1495
let num4 = 12.563454768756734523

// como concatenar ao invés de somar
console.log(num1.toString() + num2)

// como ver em numero binario
console.log(num3.toString(2))

// como arredondar
console.log(num4.toFixed(2)) //o 2 é o quanto de casa decimal quero

// descobrir se o numero é inteiro
console.log(Number.isInteger(num1))

let temp = num1 * 'ola'
console.log(Number.isNaN(temp))
