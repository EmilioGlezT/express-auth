import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routerLibros from "./libros/LibrosRoutes";


dotenv.config();

export const app: Express = express();
const port = process.env.PORT;

app.use('/app', routerLibros)

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScfffript Server");
});

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });