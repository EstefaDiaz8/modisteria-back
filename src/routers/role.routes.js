// const router = require("express").Router();
const { Router } = require("express");
const { getAllRoles, getRoleById, createRole, updateRole, deleteRole, statusRole} = require("../controllers/role.controller");
const { verifyToken } = require("../utils/verifyToken");
const { validateRoleAdmin } = require("../validators/role.validator");
const router = Router();

router.get('/getAllroles', [verifyToken, validateRoleAdmin], getAllRoles);

router.get('/getRolById/:id', [], getRoleById);

router.post('/createRol', createRole);

router.put('/updateRol/:id', [], updateRole);

router.update('/statusRol/:id', [], statusRole);

router.destroy('/deleteRol/:id', [], deleteRole);

module.exports = router;