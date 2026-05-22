
import axios from 'axios';
import { paisesAmerica } from '../repositories/paisesRepository.mjs';
import paisesRepository from '../repositories/paisesRepository.mjs';


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
};


export async function importarEnMongoS(datos) {

    try {
        const datos = await filtrarPaisesEspañol();
        return await paisesRepository.importarEnMongoR(datos);

    } catch (error) {
        console.error('Detalle de errores importarEnMongoS (servicio):', error.message);
    }
};


export async function eliminarEnMongoS() {

    try {
        return await paisesRepository.eliminarEnMongoR();

    } catch (error) {
        console.error('Detalle de errores eliminarEnMongoS (service):', error.message);
    }
};

export async function crearPaisS(datos) {

    try {
        return await paisesRepository.crearPaisR(datos);
    } catch (error) {
        console.error('Detalle de errores crearPaisS() (service):', error.message);
    }
}
