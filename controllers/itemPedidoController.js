const ItemPedido = require('../models/itemPedido');
const { validateItemPedido } = require('../validators/itemPedidoValidator');

// Create ItemPedido
exports.createItemPedido = async (req, res) => {
    const { error } = validateItemPedido(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const itemPedido = await ItemPedido.create(req.body);
        res.status(201).json(itemPedido);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create itemPedido' });
    }
};

// Get All ItemPedidos with Pagination
exports.getItemPedidos = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const items = await ItemPedido.findAll({
            offset: (page - 1) * limit,
            limit: parseInt(limit),
            include: ['produto'],
        });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch itemPedidos' });
    }
};

// Update ItemPedido
exports.updateItemPedido = async (req, res) => {
    const { id } = req.params;
    const { error } = validateItemPedido(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const itemPedido = await ItemPedido.findByPk(id);
        if (!itemPedido) return res.status(404).json({ error: 'ItemPedido not found' });

        await itemPedido.update(req.body);
        res.status(200).json(itemPedido);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update itemPedido' });
    }
};

// Delete ItemPedido (Soft Delete)
exports.deleteItemPedido = async (req, res) => {
    const { id } = req.params;
    try {
        const itemPedido = await ItemPedido.findByPk(id);
        if (!itemPedido) return res.status(404).json({ error: 'ItemPedido not found' });

        await itemPedido.destroy();
        res.status(200).json({ message: 'ItemPedido deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete itemPedido' });
    }
};
