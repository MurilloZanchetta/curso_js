//   FOR IN



const pessoa =  {
    nome: 'Murillo',
    sobrenome: 'Zanchetta',
    idade: '19 anos',
    }


for(let i in pessoa){
    console.log(`${i}: ${pessoa[i]}`);
}