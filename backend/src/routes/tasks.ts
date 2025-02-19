import express from "express";
import { authenticate } from "../middleware/auth";
import Task from "../models/Task";

const router = express.Router();

router.get("/tasks",authenticate, async(req,res)=>{
    const task = await Task.findAll()
    res.status(200).json(task)
});

router.post("/tasks",authenticate,async(req,res)=>{
    const {title, description} = req.body
    const task = await Task.create({title,description, userId:(req as any).user.id})
    res.status(201).json(task)
});

router.put("/tasks/:id",authenticate,async(req,res)=>{
    const { id } = req.params

    const task = await Task.findByPk(id)
    if(!task)
        res.status(403).json({error:"Task does not exist"})
    
    task?.update(req.body)
    res.status(200).json(task)
});

router.delete("/tasks/:id",authenticate, async(req,res)=>{
    const { id } = req.params

    const task = await Task.findByPk(id)
    if(!task)
        res.status(403).json({error:"Task does not exist"})

    await task?.destroy()
    res.json({message: "task deleted"})
});


export default router