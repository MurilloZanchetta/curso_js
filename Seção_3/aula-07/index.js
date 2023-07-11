const pontuacaoUsuario = 999
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuário Vip' : 'Usuário normal';
console.log(nivelUsuario)


const corUsuario = 'Pink'
const corPadrao = corUsuario || 'black'

// if (pontuacaoUsuario >= 1000){
//     console.log('Parabéns, você é vip!')
// } else{
//     console.log('comum')
// }