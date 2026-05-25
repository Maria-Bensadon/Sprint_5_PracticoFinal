
import { body } from 'express-validator';

export const validarPais = () => [

    body('nombreComun')
        .notEmpty().withMessage('El pais debe tener un nombre')
        .trim()
        .isLength({ min: 3, max: 90 }).withMessage('El nombre comun debe tener entre 3 y 90 caracteres'),

    body('nombreOficial')
        .notEmpty().withMessage('Ingrese el nombre oficial')
        .trim()
        .isLength({ min: 3, max: 90 }).withMessage('El nombre oficial debe tener entre 3 y 90 caracteres'),

    body('capital')
        .isArray({ min: 1 })
        .withMessage('El pais debe tener al menos una capital'),

    body('capital.*')
        .notEmpty().withMessage('Ingrese la capital del pais')
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage('El nombre oficial debe tener entre 3 y 90 caracteres'),

    body('poblacion')
        .notEmpty().withMessage('Debe indicar la cantidad de poblacion')
        .isInt({ min: 1 }).withMessage('La poblacion debe ser mayor a 1'),

    body('limites')
        .isArray({ min: 1 })
        .withMessage('El pais debe tener al menos 1 limite'),

    body('limites.*')
        .notEmpty()
        .trim()
        .toUpperCase()
        .isLength({ min: 3, max: 3 }).withMessage('Cada limite debe tener 3 letras'),

    body('area')
        .notEmpty().withMessage('Debe indicar el area')
        .isInt({ min: 1 }).withMessage('El area debe ser mayor a 1'),
];


