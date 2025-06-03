import { Router } from "express";
import { getUsers } from "../controller/user.controller";
import express from 'express';

const router = express.Router();

router.get("/", getUsers);

export default router;