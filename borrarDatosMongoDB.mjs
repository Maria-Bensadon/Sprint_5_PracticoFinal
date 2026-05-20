

import conexionMongoDB from "./configuracion/mongoConfig.mjs";
import paisesAmerica from "./services/service.mjs";
import paises from "./models/modelo.mjs";

const borrarDatos = async () => {

    try {

        await conexionMongoDB();

        await paises.deleteMany({ creador: "Gaby Bensadon" });
        console.log(`Datos borrados`);

    } catch (error) {
        console.error('detalle de errores (importar a mongoDB):', error.message);
        console.error(`Error al borrar datos en MongoDB:`, error);
        process.exit(1);
    }

};

borrarDatos();

