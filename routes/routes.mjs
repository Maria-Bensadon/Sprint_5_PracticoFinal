

import express from 'express';
import {
    obtenerPaisesEspañolController, guardarDatosController,
    borrarDatosController, crearPaisController, encontrarPaisController,
    actualizarPaisController, eliminarPaisController
} from '../controller/controller.mjs';
import { validarPais } from '../validation/reglasValidacion.mjs';
import convertirEnArray from '../validation/convertirEnArray.mjs';
import { handleValidationErrors, handleValidationErrorsCrearPais } from '../validationResults/handleValidationErrors.mjs';


const router = express.Router();

router.get('/crearPais', (req, res) => {
    res.render('addPais', { title: 'Agregar Pais' });
});

router.get('/editar/:id', encontrarPaisController);

router.get('/guardarTodos', guardarDatosController);

router.get('/borrarTodos', borrarDatosController)

// http://localhost:3000/todos
router.get('/todos', obtenerPaisesEspañolController);

router.post('/guardarTodos', guardarDatosController);

router.delete('/borrarTodos', borrarDatosController);

// http://localhost:3000/crearPais
router.post('/crearPais', convertirEnArray, validarPais(), handleValidationErrorsCrearPais, crearPaisController);

// http://localhost:3000/buscar/:id
router.put('/editar/:id', convertirEnArray, validarPais(), handleValidationErrors, actualizarPaisController);

router.delete('/eliminar/:id', eliminarPaisController);

// http://localhost:3000/buscar/nombreComun/:valor
router.get('/buscar/:atributo/:valor', encontrarPaisController);



export default router;


