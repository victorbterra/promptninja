import dotenv from 'dotenv';
import pg from 'pg';


dotenv.config();

const { Pool } = pg;

const dataBase = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,    
})

dataBase.connect()
    .then(()=> console.log("✅ Banco de dados conectado com sucesso!"))
    .catch((erro)=> console.log("❌ Erro ao conectar no banco:", erro.message))

export default dataBase;