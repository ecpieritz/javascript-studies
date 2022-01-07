const pessoa1 = {
  nome: 'Luiz',
  idade: 35,
  cidade: 'São Paulo'
}
console.log(pessoa1.nome)

const pessoa2 = {
  nome: 'Bruna',
  idade: 26,
  cidade: 'Blumenau'
}
console.log(pessoa2.nome, pessoa2.idade)

// função para criar objeto
function criarPessoa(nome, idade, cidade) {
  return{
    nome,
    idade,
    cidade
  }
}
console.log(criarPessoa('Emilyn', 31, 'Blumenau'))

// dá para criar função dentro de objetos
const pessoa3 = {
  nome: 'Henrique',
  idade: 29,
  cidade: 'Urussanga',
  fala(){
    return `Eu sou ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}`
  }
}

console.log(pessoa3.fala())