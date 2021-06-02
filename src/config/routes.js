const express = require('express');
const router = express.Router();

const ClientesController = require("../controllers/clientes_controller")

/* GET home page. */
router.get('/', ClientesController.index);
router.get('/clientes', ClientesController.index);
router.post('/clientes', ClientesController.criar);
router.put('/clientes/:id', ClientesController.update);
router.delete('/clientes/:id', ClientesController.delete);

module.exports = router;
