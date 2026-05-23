

import express from 'express';
import {
    obtenerPaisesEspañolController, guardarDatosController,
    borrarDatosController, crearPaisController, encontrarPaisController,
    actualizarPaisController, eliminarPaisController
} from '../controller/controller.mjs';
import { validarPais } from '../validation/reglasValidacion.mjs';
import convertirEnArray from '../validation/convertirEnArray.mjs';
import { handleValidationErrors } from '../validationResults/handleValidationErrors.mjs';


const router = express.Router();

// router.get('/', async (req, res) => {

//     try {
//         //console.log('si anda el router'); 
//         const respuesta = await paisesAmerica();
//         res.status(200).json(respuesta);
//     } catch (error) {
//         console.error('detalle de errores (router):', error.message);
//         res.status(500).json({ message: 'Error al consumir la API' });
//     }
// });



// http://localhost:3000/todos
router.get('/todos', obtenerPaisesEspañolController);

router.post('/guardarTodos', guardarDatosController);

router.delete('/borrarTodos', borrarDatosController);

router.post('/crearPais', convertirEnArray, validarPais(), handleValidationErrors, crearPaisController);

// http://localhost:3000/buscar/nombreComun/:valor
router.get('/buscar/:atributo/:valor', encontrarPaisController);

// http://localhost:3000/buscar/:id
router.put('/buscar/:id', convertirEnArray, validarPais(), handleValidationErrors, actualizarPaisController);

router.delete('/eliminar/:id', eliminarPaisController);





export default router;


