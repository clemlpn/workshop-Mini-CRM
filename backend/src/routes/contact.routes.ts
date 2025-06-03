import { Router } from "express";
import { getContact} from "../controller/contact.controller";
import express from 'express';

const router = express.Router();

router.get("/", getContact);

export default router;