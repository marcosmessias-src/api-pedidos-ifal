const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente');
const Pedido = require('./pedido');

const Comanda = sequelize.define('Comanda', {
    idComanda: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

// Relationships
Comanda.belongsTo(Cliente, { foreignKey: 'clienteId' });
Comanda.belongsTo(Pedido, { foreignKey: 'pedidoId' });

module.exports = Comanda;
