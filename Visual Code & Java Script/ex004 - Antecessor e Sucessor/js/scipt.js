let n1 = Number(prompt('Digite um número: '))

//                     Opção 1 - Usando console

console.log(`Analizando o valor ${n1}, seu antecessor é ${n1-1} e o Sucessor é ${n1+1}`)

//                     Opção 2 -Usando Tag

let paragrafo = window.document.getElementById('parag')
paragrafo.innerText = `Analizando o valor ${n1}, seu antecessor é ${n1-1} e o Sucessor é ${n1+1}!`