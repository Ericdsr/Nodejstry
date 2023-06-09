const express = require('express');
const app = express();
const port = 3000;

const database = require('./data.json');

app.use(express.static('public'));

//recuperation database
app.get('/', (req, res) => {
    res.json(database);
  });

// Démarrer le serveur
app.listen(port, () => {
  console.log('Le serveur est en écoute sur le port 3000');
});
