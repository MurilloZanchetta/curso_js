// FOR OF

const nome = 'Pedrosa é cheirador de pica'



// for(let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// }

// for (let i in nome) {
//     console.log(nome[i])
// }


const name = ['Murillo', 'Pedrosa', 'Opa', 'In']

for (let valor of name){
    console.log(valor)
}


console.log('===============================================================')

name.forEach(function(valor, indice){

    console.log(valor, indice)
})