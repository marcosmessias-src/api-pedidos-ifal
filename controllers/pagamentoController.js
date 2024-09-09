const Pagamento = require('../models/pagamento');
const { validatePagamento } = require('../validators/pagamentoValidator');

// Create Pagamento
exports.createPagamento = async (req, res) => {
    const { error } = validatePagamento(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const pagamento = await Pagamento.create(req.body);
        res.status(201).json(pagamento);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create pagamento' });
    }
};

// Get All Pagamentos with Pagination
exports.getPagamentos = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const pagamentos = await Pagamento.findAll({
            offset: (page - 1) * limit,
            limit: parseInt(limit),
            include: ['pedido'],
        });
        res.status(200).json(pagamentos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch pagamentos' });
    }
};

// Update Pagamento
exports.updatePagamento = async (req, res) => {
    const { id } = req.params;
    const { error } = validatePagamento(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const pagamento = await Pagamento.findByPk(id);
        if (!pagamento) return res.status(404).json({ error: 'Pagamento not found' });

        await pagamento.update(req.body);
        res.status(200).json(pagamento);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update pagamento' });
    }
};

// Delete Pagamento (Soft Delete)
exports.deletePagamento = async (req, res) => {
    const { id } = req.params;
    try {
        const pagamento = await Pagamento.findByPk(id);
        if (!pagamento) return res.status(404).json({ error: 'Pagamento not found' });

        await pagamento.destroy();
        res.status(200).json({ message: 'Pagamento deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete pagamento' });
    }
};
