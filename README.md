# Sprint 5 - PracticoFinal

El objetivo del Trabajo Práctico final es realizar un servidor en NodeJS con arquitectura MCV en capas.
La aplicacion consume una API REST externa, guardando su información en MongoDB. Además de proveer un
dashboard con operaciones CRUD.

## Requerimientos del servidor
    1. Consuma datos de una API externa (listo)
    2. Procese y filtre los datos que tengan español como idioma (listo)
    3. Guarde los datos procesados en MongoDB (estructura limpia y consistente) (revisar!)
    4. Muestre un Dashboard web con tablas, totales y operaciones CRUD (agregar, 
    editar y eliminar)
    5. Las vistas deben tener como minimo un Layout, un Landing, navbar y footer.
    6. Incluya validaciones robustas en el backend para el envio de formularios.

## Tecnologías
- Node.js v20+ - Módulos ES con `.mjs`
- Express ^5.2.1 - Libreria utilizada
- NPM - gestiona las librerias del proyecto
- Mongoose ^9.6.2 - Object Data Modeling para MongoDB
- EJS ^5.0.2 - Motor de plantillas para las vistas
- Express-Ejs-Layouts ^2.5.1 - Layout compartido entre vistas
- Express-Validator ^7.3.2 - Validaciones en el backend
- Axios ^1.16.1 - Consumo de la API externa
- dotenv ^17.4.2 - Manejo de variables de entorno
- Method-Override ^3.0.0 - Soporte para métodos PUT y DELETE desde formularios HTML

## Pasos de Ejecución
