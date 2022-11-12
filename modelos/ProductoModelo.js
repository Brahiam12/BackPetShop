const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    nombre: { type:String, maxLength:40, required:true },
    marca: { type:String, maxLength:40, required:true },
    precio: { type:Number, required:true },
    categorias: [ { type:String, maxLength:40, required:true } ],
    disp : { type:Boolean, required:true }
});

module.exports= mongoose.model("productos",productoSchema);