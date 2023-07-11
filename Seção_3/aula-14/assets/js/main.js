const elementos = [
  {tag: 'p', texto: 'Flamengo, atual campeão'},
  {tag: 'div', texto: 'Flamengo, atual campeão da CdB'},
  {tag: 'section', texto: 'Flamengo, atualmente jogando bem com o Sampa'},
  {tag: 'footer', texto: 'Flamengo, atual campeão da Libertadores'},
];


const container = document.querySelector('.container')
const div = document.createElement('div')


  for(let i = 0; i < elementos.length; i++ ){
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag)
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada)
  }

container.appendChild(div)

          // outro metodo //

// for(elemento in elementos){
//   let {tag, texto} = elementos[elemento]
//   let tagCriada = document.createElement(tag)
//   let textoCriado = document.createTextNode(texto)
//   tagCriada.appendChild(textoCriado);
//   div.appendChild(tagCriada)
// }

// container.appendChild(div)