const express = require('express');
const app = express();
const port = 3000;

// Route racine
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Le serveur est en écoute sur le port 3000');
});

// try recuperation json 
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json'));
console.log(data);