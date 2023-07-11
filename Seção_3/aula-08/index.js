function zero(num) {
    return num >= 10 ? num : `0${num}`;
}



function formataData (data) {
    const dia = zero(data.getDate());
    const mes = zero(data.getMonth() + 1);
    const ano = zero(data.getFullYear());
    const hora = zero(data.getHours());
    const min = zero(data.getMinutes());
    const seg = zero(data.getSeconds());
    // const mil = data.getMilliseconds();

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;
}


const data = new Date();
const dataBrasil = formataData(data)
console.log (dataBrasil);






// const tresHoras = 60 * 60 * 3 * 1000

// const data1 = new Date();

// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth())
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours())
// console.log('Min', data.getMinutes())
// console.log('Segundos', data.getSeconds())
// console.log('Milessegundos',data.getMilliseconds())
// console.log('Dia da semana', data.getDay())


// console.log(data.toString())



