const express = require('express');
const router = express.Router();
const pagamentoController = require('../controllers/pagamentoController');

router.post('/', pagamentoController.createPagamento);    // Create a new Pagamento
router.get('/', pagamentoController.getPagamentos);       // Get all Pagamentos with pagination
router.patch('/:id', pagamentoController.updatePagamento); // Update an existing Pagamento
router.delete('/:id', pagamentoController.deletePagamento); // Soft delete a Pagamento

module.exports = router;
