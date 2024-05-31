import express from "express";
import bodyParser from 'body-parser';
import routDato from "./src/router/router.dato.js";
import cors from 'cors';

const servidor = express();
const PORT = 3000;

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended: false }));

servidor.use('/datos', routDato);

servidor.use(cors());

servidor.listen(3000, () => {
  console.log(`servidor corriendo en el puerto 3000.`);
})