
import axios from 'axios';


const paisesAmerica = async () => {
    try {
        //console.log('si anda el service');
        const paises = await axios.get('https://restcountries.com/v3.1/region/america'); // devuelve un objeto
        console.log(paises.data); // busca los datos (paises) dentro del objeto
        return paises.data;
    } catch (error) {
        console.error('Error al consumir la API:', error);
    }
}


export default paisesAmerica; 
