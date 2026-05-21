
import { filtrarPaisesEspañol, importarEnMongoS } from "../services/service.mjs";


// Metodo GET
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

}

export async function guardarDatosMongoDB(req, res) {

    try {
    
        const datosAImportar= importarEnMongoS(); 
        res.status(200).json(datosAImportar);

    } catch (error) {

        res.status(500).send({
            mensaje: "Error al guardar los países (controlador)",
            error: error.message
        });
        console.error('detalle de errores guardarDatosMongoDB (controller):', error.message);
    }
}


