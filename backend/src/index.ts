import colors from 'colors';
import server from './server';

const port = process.env.PORT ||  4000; // .PORT es una variable de entorno que se puede configurar en el servidor

server.listen(port, () => {
    console.log(colors.blue.bold(`Servidor Funcionando en el puerto: ${port}`));
})