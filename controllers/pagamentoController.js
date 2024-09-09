const Pagamento = require('../models/pagamento');

exports.createPagamento = async (req, res) => {
    try {
        const pagamento = await Pagamento.create(req.body);
        res.status(201).json(pagamento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPagamentos = async (req, res) => {
    try {
        const pagamentos = await Pagamento.findAll();
        res.status(200).json(pagamentos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
