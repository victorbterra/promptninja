import express from 'express';
import { listarSistemas } from '../controllers/sistemasController.js';

const router = express.Router();


router.get("/sistemas",listarSistemas);

export default router;