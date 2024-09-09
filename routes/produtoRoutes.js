const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/', produtoController.createProduto);        // Create a new Produto
router.get('/', produtoController.getProdutos);           // Get all Produtos with pagination
router.patch('/:id', produtoController.updateProduto);    // Update an existing Produto
router.delete('/:id', produtoController.deleteProduto);   // Soft delete a Produto

module.exports = router;
