const numeros = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10, 11, 12, 13, 14, 15 ,16, 17, 18, 19, 20]



for (let numero of numeros){
    if (numero === 4 || numero === 10){
        continue
    }

    if (numero === 15){
        break
    }

    console.log(numero)
}