let nome1 //declarou variavel
nome1 = 'João' //inicializando a variavel
let nome2 = 'Maria'
let nome3 = 'Eduardo'

console.log(`${nome1} nasceu em 1984.`)
console.log(`Em 2000 ${nome1} conheceu ${nome2}`)
console.log(`${nome1} casou-se com ${nome2} em 2015`)
console.log(`O filho de ${nome1} e ${nome2} se chama ${nome3}`)

/* 
REGRAS DAS VARIAVEIS:
- não tem como redeclarar variaveis com let
- não tem como criar com palavras reservadas (ex: let, if, else...)
- precisam ter nomes significativos, que dê para entender do que se trata
		Exemplos do que pode: 
			nome
			idade
			totalIdade
		
		Exemplos do que não pode:
			n
			x1
			t
- não pode começar o nome da variavel com numero. Ex: 1nome
- não pode conter espaço ou traços.
		Exemplos:
			nome-cliente
			nome cliente
- utilizar camelCase para variaveis
- case sensitive
- utilizar let no lugar de var
*/