import express from "express";
import { authenticate } from "../middleware/auth";
import Task from "../models/Task";

const router = express.Router();

router.get("/tasks",authenticate, async(req,res)=>{});

router.post("/tasks",authenticate,async(req,res)=>{});

router.put("/tasks/:id",authenticate,async(req,res)=>{});

router.delete("/tasks/:id",authenticate, async(req,res)=>{});


export default router