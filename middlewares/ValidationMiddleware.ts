import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export async function ValidationMiddleware(schema: Joi.AnySchema){
    return (req: Request,res: Response,next: NextFunction)=>{
        const validate = schema.validate(req.body);
        if(validate.error){
            res.sendStatus(422);
            return;
        }
        next();
    }
}