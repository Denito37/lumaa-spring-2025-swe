import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

const router = express.Router();

router.post("/auth/register", async(req, res)=>{})

router.post("/auth/login", async(req, res)=>{})


export default router