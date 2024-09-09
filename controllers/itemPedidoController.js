const ItemPedido = require('../models/itemPedido');

exports.createItemPedido = async (req, res) => {
    try {
        const itemPedido = await ItemPedido.create(req.body);
        res.status(201).json(itemPedido);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getItemPedidos = async (req, res) => {
    try {
        const items = await ItemPedido.findAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
