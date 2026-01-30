import express from "express"
import { registerUser } from "../controllers/user.controller";
import { Router } from "express";


const router = express.Router();

router.post("/register", registerUser)

export default router;