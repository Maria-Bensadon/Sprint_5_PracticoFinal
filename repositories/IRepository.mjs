class IRepository {

    obtenerTodos() {
        throw new Error(`Método 'obtenerTodos()' no implementado`);
    }

    importarEnMongoR(datos) {
        throw new Error(`Método 'importarEnMongoDB()' no implementado`);
    }

    borrarDeMongoDB() {
        throw new Error(`Método 'borrarDeMongoDB()' no implementado`);
    }


    crearPais() {
        throw new Error(`Método 'crearPais()' no implementado`);
    }

    editarPais() {
        throw new Error(`Método 'editarPais()' no implementado`);
    }

    actualizarPais() {
        throw new Error(`Método 'actualizarPais()' no implementado`);
    }

    eliminarPais() {
        throw new Error(`Método 'eliminarPais()' no implementado`);
    }

};

export default IRepository; 