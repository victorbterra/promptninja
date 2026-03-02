import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Primeiro teste da API online');
});


app.post('/api/solucoes',(req,res)=>{
    const {sistema, problema} = req.body;

    res.json({
        mensagem:"Problema recebido com sucesso!",
        sistemaInformado: sistema,
        problemaInformado:problema,
        comandoSugerido:"sfc /scannow",
        explicacao:"Este comando verifica e corrige arquivos corrompidos no sistema."
    })
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}.`)
    console.log(`Acesse no navegador: http://localhost:${PORT}`)
})


