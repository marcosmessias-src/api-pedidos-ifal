const express = require('express');
const router = express.Router();
const itemPedidoController = require('../controllers/itemPedidoController');

router.post('/', itemPedidoController.createItemPedido);
router.get('/', itemPedidoController.getItemPedidos);

module.exports = router;
