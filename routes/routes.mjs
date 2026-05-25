

import express from 'express';
import {
    obtenerPaisesEspañolController, guardarDatosController,
    borrarDatosController, agregarPaisController, encontrarPaisController,
    actualizarPaisController, eliminarPaisController
} from '../controller/controller.mjs';
import { validarPais } from '../validation/reglasValidacion.mjs';
import convertirEnArray from '../validation/convertirEnArray.mjs';
import { handleValidationErrors, handleValidationErrorsAgregarPais } from '../validationResults/handleValidationErrors.mjs';


const router = express.Router();

router.get('/agregarPais', (req, res) => {
    res.render('addPais', { title: 'Agregar Pais' });
});

router.get('/editar/:id', encontrarPaisController);

router.get('/guardarTodos', guardarDatosController);

router.get('/borrarTodos', borrarDatosController)

// http://localhost:3000/todos
router.get('/todos', obtenerPaisesEspañolController);

router.post('/guardarTodos', guardarDatosController);

router.delete('/borrarTodos', borrarDatosController);

// http://localhost:3000/agregarPais
router.post('/agregarPais', convertirEnArray, validarPais(), handleValidationErrorsAgregarPais, agregarPaisController);

// http://localhost:3000/buscar/:id
router.put('/editar/:id', convertirEnArray, validarPais(), handleValidationErrors, actualizarPaisController);

router.delete('/eliminar/:id', eliminarPaisController);

// http://localhost:3000/buscar/nombreComun/:valor
router.get('/buscar/:atributo/:valor', encontrarPaisController);



export default router;


