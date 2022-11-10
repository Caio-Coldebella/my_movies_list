import { Request, Response, NextFunction } from "express";
import { MovieUpdate, Platform } from "../protocols/movie.js";
import { MovieSchema, PlatformSchema } from "../schemas/Allschemas.js";

export async function PlatformMiddleware(req: Request, res: Response, next: NextFunction){
    const obj = req.body as Platform;
    const validate = PlatformSchema.validate(obj);
    if(validate.error){
        res.sendStatus(422);
        return;
    }
    res.locals.data = obj;
    next();
}

export async function MovieMiddleware(req: Request, res: Response, next: NextFunction){
    const obj = req.body as MovieUpdate;
    const validate = MovieSchema.validate(obj);
    if(validate.error){
        res.sendStatus(422);
        return;
    }
    res.locals.data = obj;
    next();
}