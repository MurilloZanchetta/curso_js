const pessoa1 = {
    nome: 'Murillo',
    sobrenome: 'Henrique',
    idade: 18
}

console.log(
    pessoa1.nome, pessoa1.sobrenome,
    pessoa1.idade
)

function criaPessoa (nome, sobrenome, idade) {
    return {nome,sobrenome,idade,};
}

const pessoa = criaPessoa('Murillo', 'Henrique', 18);
const pessoa2 = criaPessoa('Henrique', 'Zanchetta', 18);
const pessoa3 = criaPessoa('Zanchetta', 'Quirino', 18);
const pessoa4 = criaPessoa('Quirino', 'Murillo', 18);
const pessoa5 = criaPessoa('Murillo', 'Zanchetta', 18);
const pessoa6 = criaPessoa('Henrique', 'Quirino', 18);

const pessoas = {
    nome: 'Murillo',
    sobrenome: 'Henrique',
    idade: 18,

    fala() {
        console.log(
            `${this.nome} ${this.sobrenome} está falando oi, a a sua idade é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoas.fala();
pessoas.incrementaIdade();
pessoas.fala();
pessoas.incrementaIdade();
pessoas.fala();
pessoas.incrementaIdade();
pessoas.fala();
pessoas.incrementaIdade();
pessoas.fala();
