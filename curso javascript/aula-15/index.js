let umaString = "Um teste "

console.log(umaString)

console.log(
    umaString.concat(' em um lindo dia '));

console.log(umaString + "em um lindo dia")

console.log(`${umaString}, em um lindo dia`)

// Comando para saber em qual coordenada começa a frasee desejada

console.log(umaString.indexOf('teste')) // conta as palavras
console.log(umaString.lastIndexOf('te'))// conta as palavras de trás para frente

console.log(umaString.match(/[a-z]/g))// enumera todas as letras minúsculas

console.log(umaString.replace(/t/g, 'MUMU'))//troca as letras que indicarmos

console.log(umaString.length) //length usado  para contar as letras

console.log(umaString.slice(6))//slice serve para trazer a letra que fica depois do índice que eu coloquei

console.log(umaString.split(' ')) // separa na palavra que eu ecolher dentro de () e é formado um array

console.log(umaString.toUpperCase())// deixa tudo  maiúscula

console.log(umaString.toLowerCase())// deixa tudo minúsculo