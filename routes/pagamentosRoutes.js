const express = require('express');
const router = express.Router();
const pagamentoController = require('../controllers/pagamentoController');

router.post('/', pagamentoController.createPagamento);
router.get('/', pagamentoController.getPagamentos);

module.exports = router;
