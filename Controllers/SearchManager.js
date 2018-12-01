var BuscadorWebModel = require('../Models/BuscadorWeb');
const SearchManager = {};

SearchManager.create = (req, res, next) =>{
    var buscador = new BuscadorWebModel();
    buscador.nombre = req.body.nombre;
    buscador.version = req.body.version;
    buscador.company = req.body.company;

    buscador.save((error, buscador)=>{
        if(error) return res.status(500).json({status:500, success: false, message:"Error interno del servidor"});

        if(buscador){
            return res.status(200).json({status:200, success: true, message:"Buscador guardado correctamente en el sistema", buscador});
        }else{
            return res.status(404).json({status:404, success: false, message:"Error al guardar el nuevo buscador", buscador});
        }
    });
};

SearchManager.update = (req, res, next) =>{
    var id = req.params.id;
    BuscadorWebModel.findByIdAndUpdate(id, req.body, {new:true}, (error, buscador)=>{
        if(error) return res.status(500).json({status:500, success: false, message:"Error interno del servidor"});

        if(buscador){
            return res.status(200).json({status:200, success: true, message:"Buscador actualizado con exito en el sistema", buscador});
        }else{
            return res.status(404).json({status:404, success: false, message:"Error al actualizar buscador", buscador});
        }
    });
};

SearchManager.delete = (req, res, next) =>{

};

SearchManager.getBuscador = (req, res, next) =>{

};

SearchManager.getBuscadores = (req, res, next) =>{

};

module.exports = SearchManager;