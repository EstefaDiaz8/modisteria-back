const { Usuario } = require("./usuario.model");
const { Role } = require("./role.model");
const { Permiso } = require("./permiso.model");
const { Insumo } = require("./insumo.model");
const { Catalogo } = require('./catalogo.model.js');
const { Cita } = require('./cita.model.js');
const { Verificacion } = require('./verificacion.model.js');
const { CatalogoInsumos } = require('./catalogo_insumos.model.js')
const { Domicilio } = require('./domicilio.model.js')
const { PQRS } = require('./pqrs.model.js')
const { Pedido } = require('./pedido.model.js')
const { Estado } = require('./estado.model.js')
const { Venta } = require('./venta.model.js')
const { CitaInsumo } = require('./cita_insumo.model.js')
const { Talla } = require("./talla.model.js");
const { Imagen } = require("./imagen.model.js");
const { InsumoHistorial } = require("./insumos_historial.model.js");
const { CategoriaInsumos } = require("./categoria_insumos.model.js");
const { CategoriaPrendas } = require("./categoria_prendas.model.js");
const { UnidadesDeMedida } = require("./unidades_de_medida.model.js");
const { Proveedor } = require("./proveedor.model.js")
const { Compras } = require("./compras.model.js")

module.exports = { Usuario, Role, Permiso, Insumo, Catalogo, Cita, CatalogoInsumos, Domicilio, PQRS, Verificacion, Pedido, Estado, Venta, CitaInsumo, Talla, Imagen, InsumoHistorial, CategoriaInsumos, CategoriaPrendas, UnidadesDeMedida, Proveedor, Compras };
