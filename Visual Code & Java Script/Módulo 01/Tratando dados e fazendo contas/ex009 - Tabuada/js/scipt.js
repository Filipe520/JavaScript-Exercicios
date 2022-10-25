let tabuada = Number(prompt('Digite um número para ver sua tubuada: '));

let sub_titulo = window.document.getElementById('sub-titulo')

sub_titulo.innerText = 'Exercício da Tabuada'

let tab = window.document.getElementById('parag')
tab.innerText = `
${tabuada} x 1 = ${tabuada*1}\n
${tabuada} x 2 = ${tabuada*2}\n
${tabuada} x 3 = ${tabuada*3}\n
${tabuada} x 4 = ${tabuada*4}\n
${tabuada} x 5 = ${tabuada*5}\n
${tabuada} x 6 = ${tabuada*6}\n
${tabuada} x 7 = ${tabuada*7}\n
${tabuada} x 8 = ${tabuada*8}\n
${tabuada} x 9 = ${tabuada*9}\n
${tabuada} x 10 = ${tabuada*10}`

/*console.log('----------- Exercício da Tabuada  ----------------')
console.log(`
${tabuada} x 1 = ${tabuada*1}\n
${tabuada} x 2 = ${tabuada*2}\n
${tabuada} x 3 = ${tabuada*3}\n
${tabuada} x 4 = ${tabuada*4}\n
${tabuada} x 5 = ${tabuada*5}\n
${tabuada} x 6 = ${tabuada*6}\n
${tabuada} x 7 = ${tabuada*7}\n
${tabuada} x 8 = ${tabuada*8}\n
${tabuada} x 9 = ${tabuada*9}\n
${tabuada} x 10 = ${tabuada*10}`)
console.log('--------------------------------------------------')*/