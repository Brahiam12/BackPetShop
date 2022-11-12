const clienteModelo =require ("../modelos/ClienteModelo");
const clienteOperaciones ={}

clienteOperaciones.crearCliente = async (req,res)=>{
    try{
        const objeto = req.body;
        console.log(objeto);
        const cliente = new clienteModelo(objeto);
        const clienteguardado = await cliente.save();
        res.status(201).send(clienteguardado);
    }catch(error){
        res.status(400).send("Mala petición: "+error);
    }
}

clienteOperaciones.buscarClientes = async(req,res) => {
    
    try{
        const filtro = req.query;
        let listaClientes;
        if(filtro.q != null){
             listaClientes = await clienteModelo.find({
                "$or" :[
                {"nombres":{ $regex:filtro.q, $options:"i"}},
                {"apellidos":{ $regex:filtro.q, $options:"i"}},
                {"correo":{ $regex:filtro.q, $options:"i"}}
             ]});
        }else {
             listaClientes = await clienteModelo.find();
        }
        if(listaClientes.length > 0){
            res.status(200).send(listaClientes);
        }else{
            res.status(400).send("No hay datos");
        }
    }catch(error){
        res.status(400).send("Mala petición."+ error);

    }

}

clienteOperaciones.buscarCliente = async (req, res)=>{
    try {
        const id = req.params.id;
        const cliente = await clienteModelo.findById(id);
        if (cliente != null){
            res.status(200).send(cliente);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

clienteOperaciones.modificarCliente = async (req, res)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        const datosActualizar = {
            nombres: body.nombres,
            direccion: body.direccion,
            // identificacion: body.identificacion,
            contraseña: body.contraseña,
            correo: body.correo,
            telefono: body.telefono,
           
        }
        const clienteActualizado = await clienteModelo.findByIdAndUpdate(id, datosActualizar, { new : true });
        if (clienteActualizado != null) {
            res.status(200).send(clienteActualizado);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

module.exports = clienteOperaciones;