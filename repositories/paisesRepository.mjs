
import IRepository from "./IRepository.mjs";
import paisesModelo from "../models/modelo.mjs";
import axios from "axios";

export const paisesAmerica = async () => {
    try {
        const paises = await axios.get('https://restcountries.com/v3.1/region/america');
        return paises.data;
    } catch (error) {
        console.error('Error al consumir la API:', error);
        throw error; 
    }

};

class paisesRepository extends IRepository {

    // ruta metodo GET 
    async obtenerTodosR() {
        try {
            // los datos se obtienen de la base de datos
            return await paisesModelo.find({ creador: "Gaby Bensadon" });
        } catch (error) {
            console.error('Error al obtener los paises (repo): ', error.message);
            throw error;
        }
    }

    // ruta metodo post
    async importarEnMongoR(datos) {

        try {
            await paisesModelo.deleteMany({ creador: "Gaby Bensadon" });
            await paisesModelo.insertMany(datos);
            const datosRepo = await paisesModelo.find({ creador: "Gaby Bensadon" });
            console.log(`prueba insertMany correcta`);
            return datosRepo;
        } catch (error) {
            console.error('Detalle de errores importarEnMongoR (repositorio):', error.message);
            throw error;
        }
    }

    // ruta metodo delete
    async eliminarEnMongoR() {

        try {
            const datosAEliminar = await paisesModelo.find({ creador: "Gaby Bensadon" });
            await paisesModelo.deleteMany({ creador: "Gaby Bensadon" });
            console.log(`prueba deleteMany correcta`);
            return datosAEliminar;

        } catch (error) {
            console.error('Detalle de errores eliminarEnMongoR (repositorio):', error.message);
            throw error;
        }
    }

    async agregarPaisR(datos) {

        try {
            const paisNew = await paisesModelo.create(datos);
            console.log(`prueba agregarPais correcta`);
            return paisNew;
        } catch (error) {
            console.error('Detalle de errores agregarPaisR (repo):', error.message);
            throw error;
        }
    }

    async encontrarPaisR(id) {

        try {
            const paisEncontrado = await paisesModelo.findById(id);
            console.log(`prueba encontrarPais correcta`);
            return paisEncontrado;

        } catch (error) {
            console.error('Detalle de errores encontrarPaisR (repo):', error.message);
            throw error;
        }
    }

    async actualizarPaisR(id, datosActualizados) {

        try {
            const paisActualizado = await paisesModelo.findByIdAndUpdate(id, datosActualizados);
            console.log(`prueba paisActualizado correcta`);
            return paisActualizado;
        }
        catch (error) {
            console.error('Detalle de errores actualizarPaisR (repo):', error.message);
            throw error;
        }
    }

    async eliminarPaisR(id) {

        try {
            const paisEliminado = await paisesModelo.findByIdAndDelete(id, { creador: "Gaby Bensadon" });
            console.log(`prueba eliminarPais (repo) correcta`);
            return paisEliminado;
        } catch (error) {
            console.error('Detalle de errores eliminarPais (repo):', error.message);
            throw error;
        }
    }

};

export default new paisesRepository();
