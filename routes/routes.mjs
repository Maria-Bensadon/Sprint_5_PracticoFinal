

import express from 'express';
import {
    obtenerPaisesEspañolController, guardarDatosController,
    borrarDatosController, agregarPaisController, encontrarPaisController,
    actualizarPaisController, eliminarPaisController
} from '../controller/controller.mjs';
import { validarPais } from '../validation/reglasValidacion.mjs';
import convertirEnArray from '../validation/convertirEnArray.mjs';
import { handleValidationErrors } from '../validationResults/handleValidationErrors.mjs';


const router = express.Router();


// http://localhost:3000/todos
router.get('/todos', obtenerPaisesEspañolController);

// http://localhost:3000/agregarPais
router.get('/agregarPais', (req, res) => {
    res.render('addPais', { title: 'Agregar Pais' });
});

// http://localhost:3000/editar/:id
router.get('/editar/:id', encontrarPaisController);

router.post('/guardarTodos', guardarDatosController);
router.post('/agregarPais', convertirEnArray, validarPais(), handleValidationErrors, agregarPaisController);

router.put('/editar/:id', convertirEnArray, validarPais(), handleValidationErrors, actualizarPaisController);

router.delete('/borrarTodos', borrarDatosController);
router.delete('/eliminar/:id', eliminarPaisController);


export default router;

