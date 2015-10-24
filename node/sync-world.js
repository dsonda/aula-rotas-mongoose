var fs = require('fs');

console.log('Vou ler', Date.now());
console.time('leitura');

var file = fs.readFileSync('Serenata Campeira.mp3');
console.log(file);

console.timeEnd('leitura');
console.log('Já li', Date.now());