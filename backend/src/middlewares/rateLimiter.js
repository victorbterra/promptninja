import rateLimit from 'express-rate-limit';
import { AppError } from '../utils/AppError.js';

export const limitadorGeral = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 3,
    standardHeaders: true,
    legacyHeaders: false,

    handler: (req,res,next) => {
        next(new AppError("Você fez muitos pedidos. Por favor, aguarde 15 minutos", 429));
    }
})