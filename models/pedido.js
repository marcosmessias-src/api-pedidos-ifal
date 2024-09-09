const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ItemPedido = require('./itemPedido');

const Pedido = sequelize.define('Pedido', {
    idPedido: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dataHora: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
    total: { type: DataTypes.FLOAT, allowNull: false }
});

// Relationships
Pedido.hasMany(ItemPedido, { foreignKey: 'pedidoId' });

module.exports = Pedido;
