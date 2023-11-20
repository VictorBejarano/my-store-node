const express = require('express');
const routerApi = require('./routes');

const app = express(); // Se crea aplicacion
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

routerApi(app);

app.listen(port, () => {
  console.log('Mi port' + port);
});
