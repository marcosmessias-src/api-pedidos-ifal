const Comanda = require('../models/comanda');

exports.createComanda = async (req, res) => {
    try {
        const comanda = await Comanda.create(req.body);
        res.status(201).json(comanda);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getComandas = async (req, res) => {
    try {
        const comandas = await Comanda.findAll();
        res.status(200).json(comandas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
