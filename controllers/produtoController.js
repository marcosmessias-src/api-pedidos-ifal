const Produto = require('../models/produto');
const { validateProduto } = require('../validators/produtoValidator');

// Create Produto
exports.createProduto = async (req, res) => {
    const { error } = validateProduto(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const produto = await Produto.create(req.body);
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create produto' });
    }
};

// Get All Produtos with Pagination
exports.getProdutos = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const produtos = await Produto.findAll({
            offset: (page - 1) * limit,
            limit: parseInt(limit),
        });
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch produtos' });
    }
};

// Update Produto
exports.updateProduto = async (req, res) => {
    const { id } = req.params;
    const { error } = validateProduto(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const produto = await Produto.findByPk(id);
        if (!produto) return res.status(404).json({ error: 'Produto not found' });

        await produto.update(req.body);
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update produto' });
    }
};

// Delete Produto (Soft Delete)
exports.deleteProduto = async (req, res) => {
    const { id } = req.params;
    try {
        const produto = await Produto.findByPk(id);
        if (!produto) return res.status(404).json({ error: 'Produto not found' });

        await produto.destroy();
        res.status(200).json({ message: 'Produto deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete produto' });
    }
};
