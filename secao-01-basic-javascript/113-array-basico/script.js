//Array é uma lista, uma coleção de 'coisas'

const alunos = ['Luiz', 'Maria', 'João', 'Vera', 'Alfredo']

// a boa prática diz que um array só pode conter 1 mesmo tipo de dado, não misturar como na const abaixo
const dadosLoucos = ['Luiz', 2, 'João', 5.333, true, null, {a:'b', c: 'd'}]

// arrays são indexados
console.log(alunos[2])

// editar um valor
alunos[0] = 'Eduardo'
console.log(alunos)

// adicionar um elemento no array
alunos[alunos.length] = 'Marcela'
alunos[alunos.length] = 'Luana'
alunos[alunos.length] = 'Henrique'
console.log(alunos)
  // existe uma função que já faz isso que mostra acima
  alunos.push('Vitor')
  console.log(alunos)
  
// adicionar no começo
alunos.unshift('Rebeca')
console.log(alunos)

// remover elementos do final
const removido = alunos.pop()
console.log(removido)
console.log(alunos)

// remover elementos do começo
const removido2 = alunos.shift()
console.log(removido2)
console.log(alunos)

// deletar 1 item do array
delete alunos[3]
console.log(alunos)

// se acessar um índice que não existe, dará 'undefined'

// fatiar array
console.log(alunos.slice(0 , 4))
console.log(alunos.slice(2 , -2))