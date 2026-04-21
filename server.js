const express = require('express');
const app = express();
const path = require('path');

// Importamos tus módulos
const checkCPU = require('./cpu');
const checkRAM = require('./ram');
const checkDisco = require('./disco');

const PORT = 3000;

// Servir archivos estáticos (HTML/CSS)
app.use(express.static('public'));

// Endpoint que devuelve los datos en formato JSON
app.get('/api/status', (req, res) => {
    res.json({
        cpu: checkCPU(),
        ram: checkRAM(),
        disco: checkDisco()
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
