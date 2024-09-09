const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./pedido');

const Pagamento = sequelize.define('Pagamento', {
    idPagamento: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tipoPagamento: { type: DataTypes.STRING, allowNull: false },
    valor: { type: DataTypes.FLOAT, allowNull: false },
    dataHora: { type: DataTypes.DATE, allowNull: false }
});

// Relationships
Pagamento.belongsTo(Pedido, { foreignKey: 'pedidoId' });

module.exports = Pagamento;
