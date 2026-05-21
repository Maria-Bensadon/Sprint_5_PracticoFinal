
import axios from 'axios';
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


export async function filtrarPaisesEspañol() {

    try {
        const paises = await paisesAmerica();
        const paisesEspañol = paises
            .filter(pais => { return pais.languages.spa })
            .map(pais => {
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
        return paisesEspañol;
    }

    catch (error) {
        console.log(`Error al filtrar países: `, error.message);
    }
}

export async function importarEnMongoS(datos) {

    try {
        const datos = await filtrarPaisesEspañol(); 
        return await paisesRepository.importarEnMongoR(datos);  

    } catch (error) {
        console.error('detalle de errores importarEnMongoS (servicio):', error.message);
    }



};





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

/**
 



 */