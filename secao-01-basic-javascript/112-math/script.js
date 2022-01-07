let num1 = 9.534546456234

// arredondar pra baixo
let num2 = Math.floor(num1)
console.log(num2)

// arredondar pra cima
let num3 = Math.ceil(num1)
console.log(num3)

// arredondar para o mais proximo
let num4 = Math.round(num1)
console.log(num4)

// descobrir o maior numero
console.log(Math.max(1, 2, 3, 6, 4, 7, 2, 124, 1244))

// descobrir o menor numero
console.log(Math.min(1, 2, 3, 6, 4, 7, 0.5, 2, 124, 1244))

// gerar numeros aleatorios
const aleatorio = Math.round(Math.random() * (10-5) + 5) //num aleatorio entre 10 e 5
console.log(aleatorio)

// valor de PI
console.log(Math.PI)

// raiz quadrada
console.log(num2 ** (1/2))
console.log(num2 ** 0.5)