
import express from 'express';
import conexionMongoDB from './configuracion/mongoConfig.mjs';
import router from './routes/routes.mjs';
import methodOverride from 'method-override';
import expressEjsLayouts from 'express-ejs-layouts';


const server = express();
const port = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.set('view engine', 'ejs');
server.use(methodOverride('_method'));

server.use(express.static('public'));

server.use(expressEjsLayouts);
server.set('layout', 'layout');

server.use('/paises', router);

// http://localhost:3000
server.get('/', (req, res) => { res.render('landing') });
conexionMongoDB();


// servidor corriendo
server.listen(port, () => console.log(`servidor corriendo en http://localhost:${port}`));

