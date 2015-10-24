var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pos-unoesc');

var db = mongoose.connection;

db.on('error', function(err){
  console.log('Erro de conexao.', err);
});
db.on('open', function(){
  console.log('Conexão aberta.');
});
db.on('connected', function(err){
  console.log('Conectado.');
});
db.on('disconnected', function(err){
  console.log('Desconectado.');
});

var Schema = mongoose.Schema;

var json_schema ={
  name: {type: String, default: ''},
  description: {type: String, default: ''},
  alcohol: {type: Number, min: 0},
  price: {type: Number, min:0},
  category: {type: String, default: ''},
  created_at: {type: Date, default: Date.now}
}

var BeerSchema = new Schema(json_schema);

var Beer = mongoose.model('Beer', BeerSchema),
    query = {name: /skol/i};

var mod = {
  name: 'Brahma',
  alcohol: 4,
  price: 6,
  category: 'pilsen'
}

var optional = {
  upsert: false, // apenas atualizar
  multi: false // atualizar apenas o primeiro registro
}

// busca pela Skol e atualiza para Brahma
Beer.update(query, mod, function (err, data){
  if (err){
    console.log('Erro: ', err);
  }
  else {
    console.log('Cervejas atualizadas com sucesso: ', data);
  }
  process.exit(0);
});