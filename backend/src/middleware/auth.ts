import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const SECRET = process.env.JWT_SECRET||"secret";


const authenticate = (req: Request, res: Response, next: NextFunction)=>{
    const token = req.header("Authorization")?.split(" ")[1]
    if(!token)
        return res.status(401).json({error: "Not authorized"})

    try{
        const decoded = jwt.verify(token, SECRET);
        (req as any).user=decoded;
        next();
    }catch{
        res.status(401).json({error:"Invalid token"})
    }
};

export {authenticate}