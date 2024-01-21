import express from "express";
import { obtenerLibros, obtenerLibrosPorID } from "./LibrosController";



  const routerLibros = express.Router();

    routerLibros.get('/libros',obtenerLibros);

    routerLibros.get('/libros/:id',obtenerLibrosPorID);






 export default routerLibros;