const Comanda = require('../models/comanda');
const { validateComanda } = require('../validators/comandaValidator');

exports.createComanda = async (req, res) => {
    const { error } = validateComanda(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const comanda = await Comanda.create(req.body);
        res.status(201).json(comanda);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create comanda' });
    }
};

exports.getComandas = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const comandas = await Comanda.findAll({
            offset: (page - 1) * limit,
            limit: parseInt(limit),
        });
        res.status(200).json(comandas);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch comandas' });
    }
};

exports.updateComanda = async (req, res) => {
    const { id } = req.params;
    const { error } = validateComanda(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const comanda = await Comanda.findByPk(id);
        if (!comanda) return res.status(404).json({ error: 'Comanda not found' });

        await comanda.update(req.body);
        res.status(200).json(comanda);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update comanda' });
    }
};

exports.deleteComanda = async (req, res) => {
    const { id } = req.params;
    try {
        const comanda = await Comanda.findByPk(id);
        if (!comanda) return res.status(404).json({ error: 'Comanda not found' });

        await comanda.destroy();
        res.status(200).json({ message: 'Comanda deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete comanda' });
    }
};
