
import { error } from "node:console";
import { filtrarPaisesEspañol, importarEnMongoS, eliminarEnMongoS, crearPaisS, encontrarPaisS, actualizarPaisS, eliminarPaisS } from "../services/service.mjs";


export async function obtenerPaisesEspañolController(req, res) {

    try {

        const paises = await filtrarPaisesEspañol();
        res.status(200).json(paises);

    }

    catch (error) {

        res.status(500).send({
            mensaje: "Error al obtener los países (controlador)",
            error: error.message
        });

    }

};


export async function guardarDatosController(req, res) {

    try {

        const datosAImportar = await importarEnMongoS();
        res.status(200).json({
            mensaje: 'Se importaron los siguientes datos:',
            datos: datosAImportar
        });

    } catch (error) {

        res.status(500).send({
            mensaje: "Error al guardar los países (controlador)",
            error: error.message
        });
        console.error('detalle de errores guardarDatosController:', error.message);
    }
};


export async function borrarDatosController(req, res) {

    try {
        const datosEliminados = await eliminarEnMongoS();

        return res.status(200).json({
            mensaje: 'Se eliminaron los siguientes datos:',
            datos: datosEliminados
        });

    } catch (error) {
        res.status(500).send({
            mensaje: "Error al eliminar los países (controlador)",
            error: error.message
        });
        console.error('detalle de errores borrarDatosController:', error.message);
    }
};


export async function crearPaisController(req, res) {

    try {
        const datos = req.body;

        const nuevoPais = await crearPaisS(datos);
        res.status(200).json({
            mensaje: 'Nuevo país creado: ',
            datos: nuevoPais
        });

        if (!nuevoPais) {
            res.status(400).send({
                mensaje: "No se pudo crear un nuevo pais (error 400)",
                error: error.message
            });
        }

    } catch (error) {
        res.status(500).send({
            mensaje: "Error al crear un nuevo pais (controlador)",
            error: error.message
        });
        console.error('detalle de errores crearPaisController:', error.message);
    }
};


export async function encontrarPaisController(req, res) {

    try {
        const { valor } = req.params;
        const encontrado = await encontrarPaisS(valor);
        res.status(200).json({
            mensaje: 'Pais encontrado: ',
            datos: encontrado
        });

        if (!encontrado) {
            res.status(400).send({
                mensaje: "No se pudo encontrar el pais (error 400)",
                error: error.message
            });
        }
    } catch (error) {

        res.status(500).send({
            mensaje: "Error al encontrarPais (controlador)",
            error: error.message
        });
        console.error('detalle de errores encontrarPaisController:', error.message);
    }
};


export async function actualizarPaisController(req, res) {

    try {
        const id = req.params.id;
        const datosActualizados = req.body;

        const actualizar = await actualizarPaisS(id, datosActualizados);
        res.status(200).json({
            mensaje: 'Pais encontrado: ',
            datos: actualizar
        });

        if (!actualizar) {
            res.status(400).send({
                mensaje: "No se pudo actualizar el pais (error 400)",
                error: error.message
            });
        }

    } catch (error) {
        res.status(500).send({
            mensaje: "Error al actualizar el pais (controlador)",
            error: error.message
        });
        console.error('detalle de errores actualizarPaisController:', error.message);
    }
};

export async function eliminarPaisController(req, res) {
    try {
        const id = req.params.id;
        const eliminado = await eliminarPaisS(id);
        res.status(200).json({
            mensaje: 'Pais eliminado: ',
            datos: eliminado
        });

        if (!eliminado) {
            res.status(400).send({
                mensaje: "No se pudo eliminar el pais (error 400)",
                error: error.message
            });
        }

    } catch (error) {
        res.status(500).send({
            mensaje: "Error al eliminar el pais (controlador)",
            error: error.message
        });
        console.error('detalle de errores eliminarPaisController:', error.message);
    }
};

