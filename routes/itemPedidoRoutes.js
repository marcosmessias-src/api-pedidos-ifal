const express = require('express');
const router = express.Router();
const itemPedidoController = require('../controllers/itemPedidoController');

router.post('/', itemPedidoController.createItemPedido);  // Create a new ItemPedido
router.get('/', itemPedidoController.getItemPedidos);     // Get all ItemPedidos with pagination
router.patch('/:id', itemPedidoController.updateItemPedido); // Update an existing ItemPedido
router.delete('/:id', itemPedidoController.deleteItemPedido); // Soft delete an ItemPedido

module.exports = router;
