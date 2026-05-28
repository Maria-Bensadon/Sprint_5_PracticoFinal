
// configuracion de la base de datos

import mongoose from 'mongoose';
import { setServers } from 'node:dns/promises'; // setServers cambia la configuracion interna del servidor
setServers(["1.1.1.1", "8.8.8.8"]); // utiliza los servidores de cloudflare y google, respectivamente


const conexionMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Conexión exitosa a MongoDB`);
    }

    catch (error) {
        console.error(`Error al conectar a MongoDB:`, error);
        process.exit(1); // se interrumpe el proceso para avisar que hubo un error 
    }
}; 

export default conexionMongoDB; 

