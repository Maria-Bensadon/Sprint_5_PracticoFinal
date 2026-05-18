
import conexionMongoDB from "./configuracion/mongoConfig.mjs";
import paisesAmerica from "./services/service.mjs";
import paises from "./models/modelo.mjs";

const importarDatos = async () => {

    try {

        await conexionMongoDB();

        const datos = await paisesAmerica();
        await paises.insertMany(datos);
        console.log(`Datos importados`);

    } catch (error) {
        console.error('detalle de errores (importar a mongoDB):', error.message);
        console.error(`Error al importar a MongoDB:`, error);
        process.exit(1);
    }

};

importarDatos(); 
