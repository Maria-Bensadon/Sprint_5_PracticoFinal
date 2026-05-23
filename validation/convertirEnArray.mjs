

function convertirEnArray(req, res, next) {

    try {
        const datos = req.body;

        if (typeof datos.capital === "string") {
            datos.capital = datos.capital.split(",").map(p => p.trim());
        }

        if (typeof datos.zonaHoraria === "string") {
            datos.zonaHoraria = datos.zonaHoraria.split(",").map(p => p.trim());
        }

        if (typeof datos.limites === "string") {
            datos.limites = datos.limites.split(",").map(p => p.trim());
        }

        if (typeof datos.continente === "string") {
            datos.continente = datos.continente.split(",").map(p => p.trim());
        }

        next();

    } catch (error) {
        res.status(500).send({
            mensaje: "Error al convertir en array (middleware)",
            error: error.message
        });
    }
};

export default convertirEnArray; 