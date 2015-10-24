var fs = require('fs');

console.log('Vou ler', Date.now());
console.time('leitura');

//var file = fs.readFileSync('Serenata Campeira.mp3');
fs.readFile('Serenata Campeira.mp3', function(err, data) {
  console.log(data);
});

console.timeEnd('leitura');
console.log('Já li', Date.now());