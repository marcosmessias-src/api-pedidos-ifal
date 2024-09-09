const Joi = require('joi');

const validatePagamento = (pagamento) => {
    const schema = Joi.object({
        tipoPagamento: Joi.string().required(),
        valor: Joi.number().required(),
        pedidoId: Joi.number().integer().required(),
    });

    return schema.validate(pagamento);
};

module.exports = { validatePagamento };
