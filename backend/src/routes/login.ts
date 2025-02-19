import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

const router = express.Router();
const SECRET:any = process.env.JWT_SECRET

router.post("/auth/register", async(req, res)=>{
    const {username, password} = req.body
    const hashedPassword = await bcrypt.hash(password,10)

    const userExist = await User.findOne({where:{ username }})
    if(userExist)
        res.status(400).json({error:"Username is taken"})

    const user = await User.create({username, password:hashedPassword})
    res.status(201).json(user)
    res.redirect("/auth/login")
})

router.post("/auth/login", async(req, res)=>{
    const {username, password} = req.body

    const user = await User.findOne({where:{ username }})
    if(!user)
        return res.status(401).json({error:"user not found"})
    if(!await bcrypt.compare(password, user.password))
        return res.status(401).json({error:"Invalid password"})

    const token = jwt.sign({id:user.id},SECRET,{expiresIn:"1h"})
    res.json({ token })
    res.redirect("/tasks")
})

export default router