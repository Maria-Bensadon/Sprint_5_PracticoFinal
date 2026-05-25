
import {
    filtrarPaisesEspañol, importarEnMongoS,
    eliminarEnMongoS, crearPaisS, encontrarPaisS,
    actualizarPaisS, eliminarPaisS,
    obtenerPaisesS
} from "../services/service.mjs";


export async function obtenerPaisesEspañolController(req, res) {

    try {
        const paises = await obtenerPaisesS();
        res.render('dashboard', { paises });
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

        const paises = await importarEnMongoS();
        res.render('dashboard', { paises });

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
        const paises = await eliminarEnMongoS();

        res.redirect('/paises/todos');

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
         console.log('datos recibidos:', datos);
        const paises = await crearPaisS(datos);
         console.log('pais creado:', paises);  

        if (!paises) {
            return res.status(400).send({
                mensaje: "No se pudo crear un nuevo pais (error 400)",
                error: error.message
            });
        }

        res.redirect('/paises/todos');

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
        const id = req.params.id;
        const pais = await encontrarPaisS(id);

        if (!pais) {
            return res.status(404).send({
                mensaje: "No se pudo encontrar el pais (error 400)",
            });
        }

        res.render('editPais', { pais });;

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
        const paises = await actualizarPaisS(id, datosActualizados);

        if (!paises) {
            return res.status(400).send({
                mensaje: "No se pudo crear un nuevo pais (error 400)",
            });
        }

        res.redirect('/paises/todos');

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
        const paises = await eliminarPaisS(id);

        if (!paises) {
            res.status(400).send({
                mensaje: "No se pudo eliminar el pais (error 404)",
            });
        }

        res.redirect('/paises/todos');

    } catch (error) {
        res.status(500).send({
            mensaje: "Error al eliminar el pais (controlador)",
            error: error.message
        });
        console.error('detalle de errores eliminarPaisController:', error.message);
    }
};

