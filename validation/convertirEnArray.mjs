

function convertirEnArray(req, res, next) {

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

    next();

};

export default convertirEnArray; 