function mostraHora (){
    let data = new Date()
    return data.toLocaleDateString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
}



const timer = setInterval(function set(){
    console.log(mostraHora());
}, 1000)


setTimeout(function(){
    clearInterval(timer)
}, 8000)


setTimeout(function(){
    console.log('Sou Foda')
}, 3000)