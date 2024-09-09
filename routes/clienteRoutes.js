const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/', clienteController.createCliente);
router.get('/', clienteController.getClientes);
router.patch('/:id', clienteController.updateCliente); // Use PATCH for updates
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
