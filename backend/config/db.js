import dotenv from 'dotenv';
import postgres from 'postgres'

dotenv.config();



const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString);

const testarConexao = async () =>{
    try{
        await sql`SELECT 1`;
        console.log("✅ Banco de dados conectado com sucesso na nuvem!")
    }
    catch(erro){
        console.error("❌ Erro ao conectar no banco de dados:", erro.message);
    }
}

testarConexao();

export default sql