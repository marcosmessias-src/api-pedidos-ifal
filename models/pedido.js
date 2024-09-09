const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ItemPedido = require('./itemPedido');

const Pedido = sequelize.define('Pedido', {
    idPedido: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dataHora: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    status: { type: DataTypes.STRING, allowNull: false },
    total: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0.0 },
}, {
    paranoid: true, // Enables soft deletes
    timestamps: true
});

Pedido.hasMany(ItemPedido, { foreignKey: 'pedidoId', as: 'items' });

module.exports = Pedido;
