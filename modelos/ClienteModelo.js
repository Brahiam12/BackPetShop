const mongoose = require("mongoose");

const clienteSchema = mongoose.Schema({
    nombres:{type: String,maxLength:40,require:true, unique:false},
    direccion:{type: String,maxLength:80,require:true, unique:false},
    documento:{type: Number,require:true, unique:true},
    contrasena:{type: String,maxLength:20,require:true, unique:false},
    correo: { type: String, maxLength: 80, required: true, unique: true },
    telefono:{type: Number,require:true, unique:false}
});

module.exports= mongoose.model("clientes",clienteSchema);