const Pedido = require('../models/pedido');

exports.createPedido = async (req, res) => {
    try {
        const pedido = await Pedido.create(req.body);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
