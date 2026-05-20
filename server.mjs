
import express from 'express';
import conexionMongoDB from './configuracion/mongoConfig.mjs';
import router from './routes/routes.mjs';

const server = express(); // instancia
const port = 3000; // puerto

server.use(express.json());

// http://localhost:3000
server.get('/', (req, res) => { res.send('si anda'); }); // solicitud HTTP
conexionMongoDB(); // funcion que conecta con la DB

server.use('/', router);

// servidor corriendo
server.listen(port, () => console.log(`servidor corriendo en http://localhost:${port}`));

