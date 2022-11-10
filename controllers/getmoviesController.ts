import { Request, Response } from "express";
import { MovieType } from "../protocols/movie";
import { getMoviesRepo } from "../respositories/respositores.js";

export async function getmovies(req: Request,res: Response){
    try {
        const data = await getMoviesRepo();
        res.send(data.rows);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function postmovie(req: Request, res: Response) {
    const data = req.body as MovieType;
}