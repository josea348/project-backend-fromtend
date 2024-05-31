import { Router } from "express";
import { listar, registrar } from "../controllers/controller.dato.js";
const routDato = Router();

routDato.get('/listar', listar);
routDato.post('/crear', registrar);

export default routDato;