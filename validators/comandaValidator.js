const Joi = require('joi');

const validateComanda = (comanda) => {
    const schema = Joi.object({
        clienteId: Joi.number().integer().required(),
    });

    return schema.validate(comanda);
};

module.exports = { validateComanda };
