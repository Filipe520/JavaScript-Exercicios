console.log('----------------------------------------')

let carteira = Number(prompt('Quanto dineiro você tem na carteira? R$'));

let dolar = carteira / 5.10;

//  -------------sub titulo----------------
let sub_titulo = window.document.getElementById('sub-titulo')

sub_titulo.innerText = 'CONVERSOR DE MOEDA 2022'

//------------- paragrafo------------------
let resultado = window.document.getElementById('parag');

resultado.innerText = `Com R$${carteira.toFixed(2)} você pode comprar US$${dolar.toFixed(2)}`


console.log(`Com R$${carteira.toFixed(2)} você pode comprar US$${dolar.toFixed(2)}`)

console.log('----------------------------------------')