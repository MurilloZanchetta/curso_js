function random (min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

let rand= 6
while (rand !== 6){
    rand= random(1, 60)
    console.log(rand)
}

console.log('###########')

do{
    rand= random(1, 60)
    console.log(rand)
}while(rand !==10);





// Quando usamos somente o while e a variavel e o mesmo valor da diferença, ele 
// não vai funcionar, porem se vc usar o do while ele vai funcionar, pois
//  a variavel muda de valor dentro do (do) e depois executa o while
