class IRepository {

    obtenerTodos() {
        throw new Error(`Método 'obtenerTodos()' no implementado`);
    }

    importarEnMongoR(datos) {
        throw new Error(`Método 'importarEnMongoDB()' no implementado`);
    }

    eliminarEnMongoR() {
        throw new Error(`Método 'borrarDeMongoDB()' no implementado`);
    }

    crearPaisR() {
        throw new Error(`Método 'crearPais()' no implementado`);
    }

    encontrarPaisR() {
        throw new Error(`Método 'editarPais()' no implementado`);
    }

    actualizarPaisR() {
        throw new Error(`Método 'actualizarPais()' no implementado`);
    }

    eliminarPaisR() {
        throw new Error(`Método 'eliminarPais()' no implementado`);
    }

};

export default IRepository; 