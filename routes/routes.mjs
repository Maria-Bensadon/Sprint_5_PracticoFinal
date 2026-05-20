

import express from 'express';
import axios from 'axios';
import { obtenerPaisesEspañolController } from '../controller/controller.mjs';

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

export default router;

router.get('/todos', obtenerPaisesEspañolController);

