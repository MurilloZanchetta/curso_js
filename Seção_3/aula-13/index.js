// Usamos o for para evitar a repetição de codigos

// for (let i = 0; i<=5; i++){
//     console.log(i)
// }

// for (let i = 500; i >=400; i-=10) {
//     console.log(i)
// }


// for (let i = 0; i <=10; i++) {
//     const par = i % 2 ===0 ? 'par' : 'impar';
//     console.log(i, par)
// }

const fruta = ['Banana', 'Mamão', 'Abacaxi', 'Uva']

// for(frutas in fruta){
//     console.log(`Índice ${frutas}`,  fruta[frutas])  
// }

         // ou  //

    for (let i = 0; i < fruta.length; i++){
        console.log(`Índice ${i}`,  fruta[i])
    }