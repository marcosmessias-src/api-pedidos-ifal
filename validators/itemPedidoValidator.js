const Joi = require('joi');

const validateItemPedido = (itemPedido) => {
    const schema = Joi.object({
        quantidade: Joi.number().integer().required(),
        precoUnitario: Joi.number().required(),
        produtoId: Joi.number().integer().required(),
    });

    return schema.validate(itemPedido);
};

module.exports = { validateItemPedido };
