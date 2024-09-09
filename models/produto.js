const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    idProduto: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    descricao: { type: DataTypes.STRING },
    preco: { type: DataTypes.FLOAT, allowNull: false },
}, {
    paranoid: true, // Enables soft deletes
    timestamps: true
});

module.exports = Produto;
