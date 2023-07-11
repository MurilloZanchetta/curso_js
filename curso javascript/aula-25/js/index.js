function exercicio() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    const imc = document.querySelector('.imc');

    function recebeEventoForm (evento) {

        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso') ;
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome : nome.value,
            sobrenome : sobrenome.value,
            peso : peso.value,
            altura : altura.value,
        });

        console.log(pessoas)
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, pesa ${peso.value}kg e tem ${altura.value}m de altura.  </p>`

        imc.innerHTML = `Seu imc é de: ${(peso.value/(altura.value**2)).toFixed(2)}`
    };

    form.addEventListener('submit', recebeEventoForm)   
}

exercicio();