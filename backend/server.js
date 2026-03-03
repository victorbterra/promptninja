import express from 'express';
import cors from 'cors';
import './config/db.js';
import solucoesRoutes from './src/routes/solucoesRoutes.js';
import sistemasRoutes from './src/routes/sistemasRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/api', solucoesRoutes);
app.use('/api',sistemasRoutes);


app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}.`)
    console.log(`Acesse no navegador: http://localhost:${PORT}`)
})


