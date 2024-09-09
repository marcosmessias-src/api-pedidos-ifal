const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

// Import routes
const clienteRoutes = require('./routes/clienteRoutes');


const app = express();

app.use(bodyParser.json());

// Rotas
app.use('/clientes', clienteRoutes);

// Sincronizar banco de dados e iniciar servidor
sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(error => console.log('Error syncing database:', error));
