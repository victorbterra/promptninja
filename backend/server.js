import express from 'express';
import cors from 'cors';
import solucoesRoutes from './src/routes/solucoesRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/api', solucoesRoutes);


app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}.`)
    console.log(`Acesse no navegador: http://localhost:${PORT}`)
})


