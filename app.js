const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

// Importar rotas
const clienteRoutes = require('./routes/clienteRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const itemPedidoRoutes = require('./routes/itemPedidoRoutes');
const comandaRoutes = require('./routes/comandaRoutes');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();

app.use(bodyParser.json());

// Rotas
app.use('/clientes', clienteRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/itemPedidos', itemPedidoRoutes);
app.use('/comandas', comandaRoutes);
app.use('/produtos', produtoRoutes);

// Sincronizar banco de dados e iniciar servidor
sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    })
    .catch(error => console.log('Erro ao sincronizar o banco de dados:', error));
