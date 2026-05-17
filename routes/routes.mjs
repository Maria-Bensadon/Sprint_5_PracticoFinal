

import express from 'express';
import paisesAmerica from '../services/service.mjs';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {

    try {
        //console.log('si anda el router'); 
        const respuesta = await paisesAmerica();
        res.status(200).json(respuesta);
    } catch (error) {
        console.error('detalle de errores (router):', error.message);
        res.status(500).json({ message: 'Error al consumir la API' });
    }
});

export default router;

