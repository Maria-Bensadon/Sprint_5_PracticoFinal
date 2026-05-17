
import mongoose from "mongoose";

const paisesSchema = new mongoose.Schema(

    {
        nombreComun: { type: String, required: true },
        nombreOficial: { type: String, required: true },
        capital: [ String ],
        poblacion: { type: Number, min: 0 },
        bandera: {
            png: { type: String, required: true },
            svg: { type: String, required: true },
            alt: { type: String, required: true },
        },
        zonaHoraria: [ String ],
        limitrofes: [ String ],
        area: { type: Number, min: 0 },
        region: { type: String, required: true },
        continente: [ String ],
        creador: { type: String, required: true },
    
});

const paises = mongoose.model('paises', paisesSchema, 'Grupo-05');
export default paises;


