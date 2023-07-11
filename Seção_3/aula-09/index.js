function getDayWeek (dayWeek) {
    let dayWeekText;

    switch(dayWeek){
        case 0:
            dayWeekText = 'Sunday';
            return dayWeekText;
        case 1:
            dayWeekText = 'Monday';
            return dayWeekText;
        case 2:
            dayWeekText = 'Tuesday';
            return dayWeekText;
        
        case 3:
            dayWeekText = 'Wednesday';
            return dayWeekText;
        case 4:
            dayWeekText = 'Thursday';
            return dayWeekText;
        case 5:
            dayWeekText = 'Friday';
            return dayWeekText;
        case 6:
            dayWeekText = 'Saturday';
            return dayWeekText;
        default:
            dayWeekText ='non-existent day of the week';
            return dayWeekText;
            
    }
}




const date = new Date('1852-09-12 22:00:45');
const dayWeek = date.getDay();
const dayWeekText = getDayWeek(dayWeek);
console.log(dayWeek, dayWeekText);














// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda-Feira';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = ' Terça-Feira';
// } else if (diaSemana === 3) {
//     diaSemanaTexto ='Quarta-Feira';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta-Feira';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta-Feira';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado';
// } else {
//     console.log('Dia da semana inexistente');
// }

