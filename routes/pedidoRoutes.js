const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.post('/', pedidoController.createPedido);          // Create a new Pedido
router.get('/', pedidoController.getPedidos);             // Get all Pedidos with pagination
router.patch('/:id', pedidoController.updatePedido);      // Update an existing Pedido
router.delete('/:id', pedidoController.deletePedido);     // Soft delete a Pedido

module.exports = router;
