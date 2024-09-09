const express = require('express');
const router = express.Router();
const comandaController = require('../controllers/comandaController');

router.post('/', comandaController.createComanda);         // Create a new Comanda
router.get('/', comandaController.getComandas);            // Get all Comandas with pagination
router.patch('/:id', comandaController.updateComanda);     // Update an existing Comanda
router.delete('/:id', comandaController.deleteComanda);    // Soft delete a Comanda

module.exports = router;
