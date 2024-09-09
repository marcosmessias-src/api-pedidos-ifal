const Joi = require('joi');

const validatePedido = (pedido) => {
    const schema = Joi.object({
        dataHora: Joi.date().optional(),
        status: Joi.string().required(),
        total: Joi.number().optional(),
        items: Joi.array().items(Joi.object({
            idItemPedido: Joi.number().integer().optional(),
            quantidade: Joi.number().integer().required(),
            precoUnitario: Joi.number().required(),
            produtoId: Joi.number().integer().required()
        })).optional(),
    });

    return schema.validate(pedido);
};

module.exports = { validatePedido };
