const express = require('express');
const app = express(); // Se crea aplicacion
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Producto 1',
      price: 3000,
    },
    {
      name: 'Producto 2',
      price: 4000,
    },
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    name: 'Producto 1',
    price: 3000,
    id,
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    name: 'Producto 1',
    price: 3000,
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
