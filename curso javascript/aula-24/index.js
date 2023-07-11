/*
primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol)
*/

let nome = 'Murillo';
nome[0] = 'S';
console.log(nome[0], nome);

let a = 'A';
let b = a;

console.log(a, b);  

a= 'murilex';
console.log(a,b)

let c = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let d = c;

console.log(c,d);

c.push(99);
console.log(c,d)

d.pop()
console.log(c, d)

const e = {
    nome: 'Murillo',
    sobrenome: 'Henrique',
};

const f = {...e}  // aqui torna o f independente usando {...}

e.nome = 'JOSÉ'

console.log(e)

console.log(f)

const g = {
    nome: 'Murillo',
    sobrenome: 'Henrique',
};

const h = g // aqui o h fica dependente do valor de g

g.nome = 'JOSÉ'

console.log(g)

console.log(h)