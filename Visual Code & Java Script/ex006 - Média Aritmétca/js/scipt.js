      //   usuário digita.
let n1 = Number(prompt('Primeira nota do aluno: '))

      //   usuário digita.
let n2 = Number(prompt('Segunda nota do aluno: '))

      //   calculo entre n1 mais n2
let calculo = (n1 + n2) / 2

     // vai mostra no console
console.log(`A média entre ${n1} e ${n2} é igual a ${calculo.toFixed(1)}`)

      // vai modificar a tag

let sub = window.document.getElementById('sub-titulo')
sub.innerText = 'Média aritmética'


let p = window.document.getElementById('parag')

p.innerText = `A média entre ${n1} e ${n2} é igual a ${calculo.toFixed(1)}`