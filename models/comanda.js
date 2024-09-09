const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente');
const Pedido = require('./pedido');

const Comanda = sequelize.define('Comanda', {
    idComanda: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
    paranoid: true,
    timestamps: true
});

Comanda.belongsTo(Cliente, { foreignKey: 'clienteId', as: 'cliente' });
Comanda.hasMany(Pedido, { foreignKey: 'comandaId', as: 'pedidos' });

module.exports = Comanda;
