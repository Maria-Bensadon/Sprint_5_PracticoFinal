
import IRepository from "./IRepository.mjs";
import paisesAmerica from "../services/service.mjs"; 
import paises from "../models/modelo.mjs";


class paisesRepository extends IRepository {

    // Metodo GET 
    async obtenerTodos() {

        try {
            return await paises.find();

        } catch (error) {
            console.log('Error Mongo: ', error.message);
        }
    }


    async importarEnMongoR(datos) {

        try {
            return await paises.insertMany(datos);

        } catch (error) {
            console.error('detalle de errores importarEnMongoR (repositorio):', error.message);
        }
    }
}
export default new paisesRepository;
