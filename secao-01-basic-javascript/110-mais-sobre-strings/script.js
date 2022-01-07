//como usar "" dentro de ""
let string01 = "Um \"texto\"."
console.log(string01)

//ver um caractere específico da string
//              012345678
let string02 = "Um texto."
console.log(string02[4]) //se sair do range de valores de índices (baixo e cima) o valor ficará como 'undefined'
console.log(string02.charAt(6))//se sair do range de valores de índices (baixo e cima) o valor ficará como ' '

//como concatenar (o mesmo que +)
console.log(string02.concat(' Ele serve de exemplo.', ' Como esse exemplo de concatenação.'))

// concatenando com template string
console.log(`${string02} Mostrando um novo exemplo de concatenação.`)

// pesquisando o índice
console.log(string02.indexOf('texto'))

// pesquisando o índice a partir de X indice
console.log(string02.indexOf('o', 3))

// mudar texto da string
console.log(string02.replace('Um', "Outro"))
  // usando expressão regular
  console.log(string02.replace(/texto/, "conteúdo"))
  
// colocando a flag g ele repete em todas as letras iguais
let string03 = 'o rato roeu a roupa do rei.'
console.log(string03.replace(/r/g, "*"))

// ver tamanho da string
console.log(string03.length)

// como fatiar a string
console.log(string03.slice(2,6))
console.log(string03.slice(-4,-1))

// dividir de acordo com X caractere
console.log(string03.split(' '))
console.log(string03.split(' ', 3))

// lower e uper case
console.log(string03.toLowerCase())
console.log(string03.toUpperCase())