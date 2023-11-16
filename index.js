const express = require('express');
const app = express(); // Se crea aplicacion
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
