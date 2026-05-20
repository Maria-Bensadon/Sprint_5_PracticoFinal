
import axios from 'axios';
import paises from '../models/modelo.mjs';
import IRepository from '../repositories/IRepository.mjs';
import paisesRepository from '../repositories/paisesRepository.mjs';


const paisesAmerica = async () => {

    try {
        const paises = await axios.get('https://restcountries.com/v3.1/region/america');
        return paises.data; 

    } catch (error) {
        console.error('Error al consumir la API:', error);
    }

}

export default paisesAmerica;


export async function filtrarPaisesEspañol(datos) {
    return paisesRepository.obtenerTodos();
}




// const paisesAmerica = async () => {

//     try {
//         // consumo de api
//         const paises = await axios.get('https://restcountries.com/v3.1/region/america');

//         const paisesFiltrados = paises.data.filter(pais => { return pais.languages.spa });

        // const paisesLimpieza = paisesFiltrados.map(pais => {
        //     return {

        //         nombreComun: pais.name.common,
        //         nombreOficial: pais.name.official,
        //         capital: pais.capital,
        //         poblacion: pais.population,
        //         bandera: pais.flags,
        //         zonaHoraria: pais.timezones,
        //         limites: pais.borders,
        //         area: pais.area,
        //         region: pais.subregion,
        //         continente: pais.continents,
        //         creador: "Gaby Bensadon"

        //     }

        // });

//         console.log(paisesLimpieza);
//         return paisesLimpieza;

//     } catch (error) {
//         console.error('Error al consumir la API:', error);
//     }
// }

// export default paisesAmerica; 
