import { Request, Response } from "express";
import connection from "../database/database";

export async function getmovies(req: Request,res: Response){
    try {/*
        const data = await connection.query('SELECT * FROM movies');*/
        res.send("ajeita o tipo");
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}