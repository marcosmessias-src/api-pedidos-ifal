const express = require('express');
const router = express.Router();
const comandaController = require('../controllers/comandaController');

router.post('/', comandaController.createComanda);
router.get('/', comandaController.getComandas);

module.exports = router;
