import express from 'express';
import { buscarSolucao } from '../controllers/solucoesController.js';

const router = express.Router();

router.post('/solucoes', buscarSolucao);


export default router;