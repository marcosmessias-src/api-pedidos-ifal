const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produto = require('./produto');

const ItemPedido = sequelize.define('ItemPedido', {
    idItemPedido: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantidade: { type: DataTypes.INTEGER, allowNull: false },
    precoUnitario: { type: DataTypes.FLOAT, allowNull: false }
});

// Relationships
ItemPedido.belongsTo(Produto, { foreignKey: 'produtoId' });

module.exports = ItemPedido;
