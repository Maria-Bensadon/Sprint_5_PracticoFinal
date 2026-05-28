

function convertirEnArray(req, res, next) {

    const datos = req.body;

    if (typeof datos.capital === "string") {
        datos.capital = datos.capital.split(",").map(dato => dato.trim());
    }

    if (typeof datos.zonaHoraria === "string") {
        datos.zonaHoraria = datos.zonaHoraria.split(",").map(dato => dato.trim());
    }

    if (typeof datos.limites === "string") {
        datos.limites = datos.limites.split(",").map(dato => dato.trim());
    }

    next();

};

export default convertirEnArray; 