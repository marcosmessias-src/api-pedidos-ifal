const Pedido = require('../models/pedido');
const { validatePedido } = require('../validators/pedidoValidator');

// Create Pedido
exports.createPedido = async (req, res) => {
    const { error } = validatePedido(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const pedido = await Pedido.create(req.body);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create pedido' });
    }
};

// Get All Pedidos with Pagination
exports.getPedidos = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const pedidos = await Pedido.findAll({
            offset: (page - 1) * limit,
            limit: parseInt(limit),
            include: ['items'],
        });
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch pedidos' });
    }
};

// Update Pedido
exports.updatePedido = async (req, res) => {
    const { id } = req.params;
    const { error } = validatePedido(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const pedido = await Pedido.findByPk(id);
        if (!pedido) return res.status(404).json({ error: 'Pedido not found' });

        await pedido.update(req.body);
        res.status(200).json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update pedido' });
    }
};

// Delete Pedido (Soft Delete)
exports.deletePedido = async (req, res) => {
    const { id } = req.params;
    try {
        const pedido = await Pedido.findByPk(id);
        if (!pedido) return res.status(404).json({ error: 'Pedido not found' });

        await pedido.destroy();
        res.status(200).json({ message: 'Pedido deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete pedido' });
    }
};
