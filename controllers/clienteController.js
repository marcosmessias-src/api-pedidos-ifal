const Cliente = require('../models/cliente');
const { validateCliente } = require('../validators/clienteValidator');

// Create Cliente
exports.createCliente = async (req, res) => {
    const { error } = validateCliente(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create cliente' });
    }
};

// Get All Clientes with Pagination
exports.getClientes = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const clientes = await Cliente.findAll({
            offset: (page - 1) * limit,
            limit: parseInt(limit),
        });
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch clientes' });
    }
};

// Update Cliente by ID
exports.updateCliente = async (req, res) => {
    const { id } = req.params;
    const { error } = validateCliente(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) return res.status(404).json({ error: 'Cliente not found' });

        await cliente.update(req.body);
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update cliente' });
    }
};

// Delete Cliente (Soft Delete)
exports.deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) return res.status(404).json({ error: 'Cliente not found' });

        await cliente.destroy();
        res.status(200).json({ message: 'Cliente deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete cliente' });
    }
};
