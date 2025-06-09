// node .\index.js
// console.log('Hello, World!') || console.log(express);

// const express = require('express'); // CJS CommonJS Module
import express from 'express'; // ESM EcmaScript Module ( Para esto se debe agregar "type": "module" en package.json )
import 'dotenv/config'; // Importar las variables de entorno desde el archivo .env
import router from './router';
import cors from 'cors'; // Importar el middleware CORS para manejar las políticas de seguridad de origen cruzado
import { connectDB } from './config/db';
import { corsConfig } from './config/cors';
// Conectar a la base de datos
connectDB()

const app = express();

// Cors
app.use(cors(corsConfig));

// Leer datos del formularios
app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones como JSON

app.use('/', router); // Define la ruta raíz y usa el router para manejar las peticiones

export default app;