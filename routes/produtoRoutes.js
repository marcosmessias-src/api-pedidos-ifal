const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/', produtoController.createProduto);
router.get('/', produtoController.getProdutos);

module.exports = router;
