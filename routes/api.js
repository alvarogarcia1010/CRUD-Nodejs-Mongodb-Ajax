var express = require('express');
var router = express.Router();
var SearchManager = require('../Controllers/SearchManager');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Ruta para Crear un nuevo buscador
router.post('/', SearchManager.create);

router.put('/:id', SearchManager.update);

router.delete('/:id', SearchManager.delete);

module.exports = router;
