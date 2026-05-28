

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


router.post('/guardarTodos', guardarDatosController);
router.delete('/borrarTodos', borrarDatosController);

// http://localhost:3000/todos
router.get('/todos', obtenerPaisesEspañolController);

// http://localhost:3000/agregarPais
router.get('/agregarPais', (req, res) => {
    res.render('addPais', { title: 'Agregar Pais' });
});
router.post('/agregarPais', convertirEnArray, validarPais(), handleValidationErrors, agregarPaisController);

// http://localhost:3000/editar/:id
router.get('/editar/:id', encontrarPaisController);
router.put('/editar/:id', convertirEnArray, validarPais(), handleValidationErrors, actualizarPaisController);

router.delete('/eliminar/:id', eliminarPaisController);


export default router;

