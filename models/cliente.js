const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
    idCliente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
    telefone: { type: DataTypes.STRING, allowNull: true },
    endereco: { type: DataTypes.STRING, allowNull: true },
}, {
    paranoid: true,  // Habilita soft deletes
    timestamps: true // Timestamps createdAt e updatedAt
});

module.exports = Cliente;
