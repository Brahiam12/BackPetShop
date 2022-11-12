const productoOperaciones = require("../operaciones/ProductoOperaciones")
const router = require("express").Router();

router.get("/",productoOperaciones.buscarProductos);
router.post("/",productoOperaciones.crearProducto);
router.put("/:id",productoOperaciones.modificarProducto);
router.delete("/:id", productoOperaciones.borrarProducto);
router.get("/:id", productoOperaciones.buscarProducto);

module.exports = router;