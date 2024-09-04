const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const create = require('./Create.js');
const deleteX = require('./Delete.js');
const update = require('./Update.js');
const read = require('./Read.js');

const prisma = new PrismaClient();
const PORT = 3000;
const users = " ";

app.use(express.json());

// Without middleware
app.get('/', function (req, res) {
  const options = {
    root: __dirname,
  };
  const fileName = 'index.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error('Error sending file:', err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

app.post('/post', function (req, res) {
  app.use(express.static('js'));
  console.log('req.query', req.query);
  const { cod, nome, descricao, id_valor, valor, id_venda, id_vendedor } = req.query;
  console.log('cod: ' + cod + ' nome: ', nome, ' descricao: ' + descricao + ' id_valor: ' + id_valor + ' valor: ' +
    valor + ' id_venda: ' + id_venda + ' id_vendedor: ' + id_vendedor
  );
  try {
      create.create(parseInt(cod), nome, descricao, parseInt(id_valor), parseFloat(valor), parseInt(id_venda), parseInt(id_vendedor));
      res.status(200).json();  
  } catch (error) {
    console.error('Error creating user:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while creating the user.' });
  }
});

app.delete('/deleteProduto', function (req, res) {
  const { cod, id_valor, id_venda } = req.query;
  console.log('deleteProduto');
  console.log( "cod: " + cod + " id_valor: " + id_valor + " id_venda: " + id_venda);
  deleteX.deleteProduto(parseInt(cod));
  try {
    res.status(200).json();
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });  
  }
});

app.delete('/deleteValor', function (req, res) {
  const { cod, id_valor, id_venda } = req.query;
  console.log('deleteValor');
  console.log( "cod: " + cod + " id_valor: " + id_valor + " id_venda: " + id_venda);
  deleteX.deleteValor(parseInt(id_valor));
  try {
    res.status(200).json();
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });  
  }
});

app.delete('/deleteVenda', function (req, res) {
  const { cod, id_valor, id_venda } = req.query;
  console.log('deleteVenda');
  console.log( "cod: " + cod + " id_valor: " + id_valor + " id_venda: " + id_venda);
  deleteX.deleteVenda(parseInt(id_venda));
  try {
    res.status(200).json();
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });  
  }
});

app.put('/putProduto', function (req, res) {
  console.log('put: ');
  console.log('req.query: ' + req.query);
  const { cod, nome, descricao } = req.query;
  console.log( "cod: " + cod + " nome: " + nome + " descricao: " + descricao)
  update.updateProduto(parseInt(cod),nome,descricao);	
  try {
    res.status(200).json();
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });  
  }
});

app.put('/putValor', function (req, res) {
  console.log('put: ');
  console.log('req.query: ' + req.query);
  const { cod, nome, descricao } = req.query;
  console.log( "cod: " + cod + " nome: " + nome + " descricao: " + descricao)
  update.updateValor(parseInt(cod),nome,descricao);	
  try {
    res.status(200).json();
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });  
  }
});

app.put('/putVenda', function (req, res) {
  console.log('put: ');
  console.log('req.query: ' + req.query);
  const { id_venda, id_vendedor, cod } = req.query;
  console.log( "id_venda: " + id_venda + " id_vendedor: " + id_vendedor + " cod: " + cod)
  update.updateVenda(parseInt(id_venda),parseInt(id_vendedor),parseInt(cod));	
  try {
    res.status(200).json();
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });  
  }
});

app.get('/getProduto', function (req, res) {
  const { cod } = req.query;
  console.log('get: ');
  console.log('cod: ' + cod);  
  read.readProduto(parseInt(cod))
    .then(function(x) { console.log(x) })
    .catch(function(err){ console.log(err)})
    .finally(console.log('End Read Produto!!'))
    try {
      res.status(200).json();
    } catch (error) {
      console.error('Error getProduto:', error);
      res.status(500).json({ error: 'An error occurred while getting Produto.' });  
    }
  });

  app.get('/getValor', function (req, res) {
    const { id_valor } = req.query;
    console.log('get: ');
    console.log('id_valor: ' + id_valor);      
    read.readValor(parseInt(id_valor))
      .then(function(x) { console.log(x) })
      .catch(function(err){ console.log(err)})
      .finally(console.log('End Read Valor!!'))
      try {
        res.status(200).json();
      } catch (error) {
        console.error('Error getValor:', error);
        res.status(500).json({ error: 'An error occurred while getting Valor.' });  
      }});

    app.get('/getVenda', function (req, res) {
      const { id_venda } = req.query;
      console.log('get: ');
      console.log('id_venda: ' + id_venda);      
      read.readVenda(parseInt(id_venda))
        .then(function(x) { console.log(x) })
        .catch(function(err){ console.log(err)})
        .finally(console.log('End Read Venda!!'))
        try {
          res.status(200).json();
        } catch (error) {
          console.error('Error getProduto:', error);
          res.status(500).json({ error: 'An error occurred while getting Venda.' });  
        }});

app.listen(PORT, function (err) {
  if (err) console.error(err);
  console.log('Server listening on PORT', PORT);
});
