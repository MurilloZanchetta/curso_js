/*
&& -> false && true -> false "o valor mesmo"

|| ->

falsy
* false

0

'' ""  ``null || undefined
*/

function falaOi(){
return 'oi'}
const vaiExecutar = false;

console.log(0 || false || null || 'murillo zanchetta');


const corUser = null;
const corPadrao = corUser || 'preto';

console.log(corPadrao);


const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e);