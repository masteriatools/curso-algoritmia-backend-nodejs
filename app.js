const express = require('express');
const cors = require('cors');
const app = express();

// Activar CORS para permitir peticiones desde cualquier origen
app.use(cors());

const productos = [
    { id: 1, nombre: 'Lenovo IdeaPad 3', precio: 450.00 },
    { id: 2, nombre: 'HP Pavilion x360', precio: 600.00 },
    { id: 3, nombre: 'Dell XPS 13', precio: 1200.00 },
    { id: 4, nombre: 'Apple MacBook Air M1', precio: 999.00 },
    { id: 5, nombre: 'Asus VivoBook 15', precio: 700.00 },
    { id: 6, nombre: 'Acer Aspire 5', precio: 500.00 },
    { id: 7, nombre: 'Microsoft Surface Laptop Go', precio: 800.00 },
    { id: 8, nombre: 'Razer Blade 15', precio: 2000.00 },
    { id: 9, nombre: 'MSI GF63 Thin', precio: 950.00 },
    { id: 10, nombre: 'Samsung Galaxy Book Pro', precio: 1100.00 }
];

app.get('/productos', (req, res) => {
    res.json(productos);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
