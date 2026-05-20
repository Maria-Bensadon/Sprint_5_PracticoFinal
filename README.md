# Sprint_5_PracticoFinal
Sprint Nro. 5 : Práctico Final

## Requerimientos
    1. Consuma datos de una API externa (listo)
    2. Procese y filtre los datos que tengan español como idioma (listo)
    3. Guarde los datos procesados en MongoDB (estructura limpia y consistente) (revisar!)
    4. Muestre un Dashboard web con tablas, totales y operaciones CRUD (agregar, 
    editar y eliminar)
    5. Las vistas deben tener como minimo un Layout, un Landing, navbar y footer.
    6. Incluya validaciones robustas en el backend para el envio de formularios.


## Pasos recomendados

    1. Configuracion inicial. Instalacion de dependencias: express, express-validatos, 
    ejs, mongoose, express-ejs-layouts, method-override, dotenv

    2. Consumo de api. Crear un servicio que obtenga todos los paises y luego los 
    filtre segun el lenguaje español. Tambien debe eliminar campos, y agregar "creador"

     - https://restcountries.com/v3.1/region/america

    3. Definir esquema mongoose solo con propiedade necesarias y validadas

    4. Guardar datos en MongoDB. Verificar integridad (tipos y valores)

    5. Listar, agregar, editar y eliminar paises. Manejar errores

    6. Implementar reglas y mensajes. Prevenir guardado invalido. 

    7. vista
        a) layouts, landing, dashboard, formularios
        b) nivel avanzado (no obligatorio)....
