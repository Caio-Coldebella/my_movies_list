import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { MovieType, Platform } from "../protocols/movie";

export async function ValidationMiddleware(schema: Joi.Schema, ObjectType: (Platform|MovieType)){
    return (req: Request,res: Response,next: NextFunction)=>{
        const obj = req.body as typeof ObjectType;
        const validate = schema.validate(obj);
        if(validate.error){
            res.sendStatus(422);
            return;
        }
        next();
    }
}