var mongoose = require('mongoose');

var buscadorWeb = mongoose.Schema({
    nombre: 'String',
    version: 'String',
    company: 'String'
});

module.exports = mongoose.model("web", buscadorWeb);