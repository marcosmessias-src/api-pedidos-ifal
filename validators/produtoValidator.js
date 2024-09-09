const Joi = require('joi');

const validateProduto = (produto) => {
    const schema = Joi.object({
        nome: Joi.string().min(3).max(30).required(),
        descricao: Joi.string().optional(),
        preco: Joi.number().required(),
    });

    return schema.validate(produto);
};

module.exports = { validateProduto };
