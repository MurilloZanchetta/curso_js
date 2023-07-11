const pessoa = {
    nome: 'Murillo',
    sobrenome: 'Zanchetta',
    idade: 18,
    endereco: {
        rua: 'Avenida 5A',
        numero: 1287
    }
}

// const nome = pessoa.nome

const {...resto} = pessoa

// const {nome, sobrenome, idade, endereco: { rua, numero
// }} = pessoa
// console.log(nome, sobrenome, idade, rua, numero   )
console.log( resto)