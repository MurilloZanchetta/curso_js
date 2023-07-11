const numero = Number(prompt('Digite um número: '));

const numeroTitulo =  document.getElementById('numero-titulo');

const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Seu número - 2 é ${numero - 2 }.</p>`
texto.innerHTML += `<p>A raiz do número ${numero} é ${numero **0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro ${Number.isInteger(numero) }.</p>`
texto.innerHTML += `<p>Arrendondando para baixo é ${Math.floor(numero)}.</p>`
texto.innerHTML += `<p>Arrendondando para cima é de ${Math.ceil (numero)}.</p>`
texto.innerHTML += `<p>Seu número com 2 casas decimais é ${numero.toFixed(2)}.</p>`