# Sprint 5 - PracticoFinal

El objetivo del Trabajo Práctico final es realizar un servidor en NodeJS con arquitectura MCV en capas.
La aplicacion consume una API REST externa, guardando su información en MongoDB. Además de proveer un
dashboard con operaciones CRUD.


## Requerimientos del servidor

    1. Consuma datos de una API externa
    2. Procese y filtre los datos que tengan español como idioma
    3. Guarde los datos procesados en MongoDB (estructura limpia y consistente)
    4. Muestre un Dashboard web con tablas, totales y operaciones CRUD (agregar, leer,
    editar y eliminar)
    5. Las vistas deben tener como minimo un Layout, un Landing, navbar y footer.
    6. Incluya validaciones robustas en el backend para el envio de formularios.


## Tecnologías

    - Node.js v20+ - Módulos ES con `.mjs`
    - Express ^5.2.1 - Libreria utilizada
    - NPM - gestiona las librerias del proyecto
    - Mongoose ^9.6.2 - Object Data Modeling para MongoDB
    - EJS ^5.0.2 - Motor de plantillas para las vistas
    - Express-Ejs-Layouts ^2.5.1 - Layout compartido entre las vistas
    - Express-Validator ^7.3.2 - Validaciones en el backend
    - Axios ^1.16.1 - Consumo de la API externa
    - dotenv ^17.4.2 - Manejo de variables de entorno
    - Method-Override ^3.0.0 - Soporte para métodos PUT y DELETE desde formularios HTML


## Pasos de Ejecución

    1. Clonar el repositorio
   
    git clone https://github.com/Maria-Bensadon/Sprint_5_PracticoFinal.git
    cd Sprint_5_PracticoFinal

    2. Instalar dependencias correspondientes
   
    npm install
   
    3. Configurar variables de entorno
        - Crear un archivo .env en la raíz del proyecto con el siguiente contenido:
  
    envMONGODB_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<nombre_db>
    PORT=3000
  
    4. Iniciar el servidor
    
    node server.mjs
    
    5. Usar la aplicación
       - Abrir el navegador en http://localhost:3000
       - Ir a Guardar Países para importar los datos desde la API y guardarlos en MongoDB
       - Ir a Países para ver el dashboard con la tabla completa


## Consideraciones especiales

    - Variables de entorno: la conexión a MongoDB se configura mediante la variable MONGODB_URI en el archivo .env. 
    Por lo tanto, es necesario este archivo para conectarse a la base de datos.
    - Primer uso: para poder leer los datos, es necesario extraerlos y guardarlos en la base de datos.
    - Duplicados: para evitar archivos duplicados, la funcion "Guardar Paises" elimina datos previos 
    antes de poder guardar nuevos. 
    - Método override: los formularios HTML solo aceptan métodos GET y POST. Por ello, para las operaciones PUT (editar) 
    y DELETE (eliminar) se utiliza el paquete method-override el cual utiliza los parametros ?_method=PUT / ?_method=DELETE 
    en la URL del formulario para poder ejecutar los métodos http correspondientes.
    - Las validaciones se aplican en dos niveles:
        1 - Frontend (alerts): verifica longitudes, formato de límites (3 letras mayúsculas), población 
        y área como números mayores a 1, antes de enviar el formulario. Si hay errores, muestra un alert y cancela el envío.
        2 - Backend (express-validator): valida cada campo del req.body en el servidor. Si hay errores, el middleware 
        handleValidationErrors (o handleValidationErrorsAgregarPais) los intercepta antes de llegar al controller.


## Estructura del proyecto

    Sprint_5_PracticoFinal/
    ├── configuracion/
    │   └── mongoConfig.mjs         # Conexión a MongoDB
    ├── controller/
    │   └── controller.mjs          # Controladores (lógica HTTP)
    ├── models/
    │   └── modelo.mjs              # Esquema Mongoose
    ├── public/
    │   ├── estilo.css              # Estilos globales
    │   ├── icons/                  # Íconos SVG del navbar
    │   └── images/                 # Imágenes estáticas
    ├── repositories/
    │   ├── IRepository.mjs         # Interfaz base del repositorio
    │   └── paisesRepository.mjs    # Acceso a MongoDB + consumo de API
    ├── routes/
    │   └── routes.mjs              # Definición de rutas
    ├── services/
    │   └── service.mjs             # Lógica de negocio
    ├── validation/
    │   ├── reglasValidacion.mjs    # Reglas de express-validator
    │   └── convertirEnArray.mjs    # Middleware: convierte strings a arrays
    ├── validationResults/
    │   └── handleValidationErrors.mjs  # Middleware: manejo de errores de validación
    ├── views/
    │   ├── layout.ejs              # Layout reutilizable
    │   ├── landing.ejs             # Página de inicio
    │   ├── dashboard.ejs           # Tabla de países
    │   ├── addPais.ejs             # Formulario agregar país
    │   ├── editPais.ejs            # Formulario editar país
    │   └── partials/
    │       ├── navbar.ejs          # Barra de navegación
    │       └── footer.ejs          # Pie de página
    ├── .env                        # Variables de entorno
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    └── server.mjs                  # Punto de entrada, configuración de Express


## Repositorio

    https://github.com/Maria-Bensadon/Sprint_5_PracticoFinal

