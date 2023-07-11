//array, object and function

const alunos = [ 'Mu', 'ri', 'llo', 'Henrique', 'Z', 'Quirino']

console.log(alunos)
console.log(alunos[5])
console.log(alunos[alunos.length - 1])
console.log(alunos.slice(1, 3));
console.log(alunos instanceof Array)

alunos.push('novato') // adiciona no fim do array

console.log(alunos)


alunos.unshift('adicionei no começo')

console.log(alunos)

alunos.shift()  // remove a primeira string
console.log(alunos)

alunos[alunos.length] = 'Outro método' // adiciona no fim do array
console.log(alunos)

alunos[alunos.length - 3] = 'Olha eu aqui!!!!!!!!'
console.log(alunos)