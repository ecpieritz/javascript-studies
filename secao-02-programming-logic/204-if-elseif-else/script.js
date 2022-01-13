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