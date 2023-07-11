function maior(x, y){
    if ( x > y ) {
        return `O primeiro número ${x} é o maior.`;
    }
    else if (x < y) {
        return `O segundo número ${y} é o maior.`;
    }
    else {
        return `Os dois numeros ${x, y} são iguais`
    }
}


const primeiro = maior(5, 3)

const segundo = maior(7, 20)

const terceiro = maior (4, 4)

console.log(primeiro)
console.log(segundo)
console.log(terceiro)


const max = (m, n) => m > n ? m : n;

console.log (max(50, 499))