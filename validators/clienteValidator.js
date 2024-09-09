const Joi = require('joi');

const validateCliente = (cliente) => {
    const schema = Joi.object({
        nome: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        telefone: Joi.string().optional(),
        endereco: Joi.string().optional()
    });

    return schema.validate(cliente);
};

module.exports = { validateCliente };
