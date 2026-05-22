
import { filtrarPaisesEspañol, importarEnMongoS, eliminarEnMongoS } from "../services/service.mjs";


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

        res.status(200).json({
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


