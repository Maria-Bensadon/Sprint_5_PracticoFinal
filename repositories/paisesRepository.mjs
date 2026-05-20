
import IRepository from "./IRepository.mjs";
import paisesAmerica from "../services/service.mjs"


class paisesRepository extends IRepository {

    // Metodo GET 
    async obtenerTodos(datos) {
 
        // no andaba porque faltaba el await
        const paises = await paisesAmerica(); 
        const filtradoSPA = paises.filter(pais => { return pais.languages.spa });

        const paisesEspañol = filtradoSPA.map(pais => {
            return {

                nombreComun: pais.name.common,
                nombreOficial: pais.name.official,
                capital: pais.capital,
                poblacion: pais.population,
                bandera: pais.flags,
                zonaHoraria: pais.timezones,
                limites: pais.borders,
                area: pais.area,
                region: pais.subregion,
                continente: pais.continents,
                creador: "Gaby Bensadon"

            }

        });

        return await paisesEspañol;
    }


}

export default new paisesRepository;
