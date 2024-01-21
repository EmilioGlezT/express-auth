import { Request, Response } from "express";
import pool from "../database/dbMaria";

export async function obtenerLibros(req: Request, res: Response){
    const [rows, fields] = await pool.query(`
    SELECT *
    FROM control_libros.libros;
    `);
    res.status(200);
    res.send(rows) ;

}
export async function obtenerLibrosPorID(req: Request, res: Response){
    const [rows, fields] = await pool.query(`
    SELECT *
    FROM control_libros.libros 
    WHERE id_libro = ${req.params.id};
    `);
    res.status(200);
    res.send(rows) ;
}
export function restarInventario(req: Request, res: Response){
console.log("HOfffla")
}
export function darDeBajaTitulo(req: Request, res: Response){

}