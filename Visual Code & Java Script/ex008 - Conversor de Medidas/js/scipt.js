let metros = Number(prompt('Uma distância em metros: '));

                              // Medidas - INICIO
let km = metros / 1000;
let hm = metros / 100;
let dam = metros / 10;
let dm = metros * 10;
let cm = metros * 100;
let mm = metros * 1000;

// Medidas - FINAL

let sub = window.document.getElementById('sub-titulo')
sub.innerText = 'Converso de Medidas'

let paraf = window.document.getElementById('parag')
paraf.innerText = `A medida de ${metros.toFixed(1)}m corresponde a`

let paraf_2 = window.document.getElementById('paraf-2')
paraf_2.innerText = `${km.toFixed(3)} km  \n${hm.toFixed(2)} hm  \n${dam.toFixed(1)} dam  \n${dm.toFixed(1)} dm  \n${cm.toFixed(1)} cm  \n${mm.toFixed(1)} mm`

console.log(`A medida de ${metros.toFixed(1)} corresponde a`)
console.log(`${km.toFixed(1)}km  \n${hm.toFixed(1)}hm  \n${dam.toFixed(1)}dam  \n${dm.toFixed(1)}dm  \n${cm.toFixed(1)}cm  \n${mm.toFixed(1)}mm`)