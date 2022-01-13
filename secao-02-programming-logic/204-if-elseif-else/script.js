/*
- IF pode ser usado sozinho
- Sempre que utilizo a palavra ELSE, preciso de um IF antes
- Pode ter vários ELSE IF na condição
- só posso ter 1 ELSE na condição
- Pode existir condições sem ELSE IF
*/

const hora = 9
// estrutura condicional
if (hora >= 0 && hora <= 11) {
  console.log('Bom dia')
} else if (hora >= 12 && hora <= 17){
  console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23){
  console.log('Boa noite')
} else{
  console.log('Horario fora do padrão')
}

const tenhoDinheiro = true
if(tenhoDinheiro){
  console.log('vou ir a padaria')
}else{
  console.log('não vou ir a padaria')
}

console.log('----Parte 2----')

// os blocos de IF e ELSE dependem um do outro
const num = 10
// se isso for true, faça isso
if(num >= 0 && num <= 5){
  console.log('O numero está entre 0 e 5')
} else if (num >= 6 && num <= 8){
  console.log('O numero está entre 6 e 8')
} else if (1 === 1){ //se tiver uma condição TRUE fora da lógica e que anteceda a expressão que seria TRUE, ela executará e quebrará o código
  console.log('LITERAL')
} else if (num >= 9 && num <= 11){
  console.log('O numero está entre 9 e 11')
} else{
  //se não for true, faça isso
  console.log('O numero NÃO está entre 0 e 11')
}