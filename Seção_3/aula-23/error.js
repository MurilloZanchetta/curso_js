function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('Os 2 devem ser números, obrigatoriamente!')
    }
    return x + y
}

try{
    console.log(soma(1, '2'))

} catch(err){
    console.log(err)
}


// try {
//     let teste;
//     teste = Almanaque
//     console.log(teste)
// }catch(err) {
//     teste = 'Almanaque'
//     console.log(teste)
// }