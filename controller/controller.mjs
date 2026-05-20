
import { filtrarPaisesEspañol } from "../services/service.mjs";


// Metodo GET
export async function obtenerPaisesEspañolController(req, res) {

    try {

        const paises = await filtrarPaisesEspañol();

        res.status(200).json(paises);

    }

    catch (error) {

        res.status(500).send({
            mensaje: "Error al obtener los países",
            error: error.message
        });

    }

}
