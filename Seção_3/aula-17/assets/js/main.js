const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGroudColorBody = estilosBody.backgroundColor;
console.log(backGroudColorBody)



for (let p of ps){
  p.style.backgroundColor = backGroudColorBody
  p.style.color = '#ffff'
  p.style.textAlign = 'center'

}