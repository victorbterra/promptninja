import sql from '../../config/db.js';

export const listarSistemas = async (req,res)=>{
    
    try{

        const sistemas = await sql`
        SELECT id, nome
        FROM sistemas
        ORDER BY nome ASC
        `;
        res.json(sistemas);
    } catch(erro){
        console.erro("❌ Erro ao listar sistemas:", erro.message)
        res.status(500).json({ erro:"Erro interno do servidor." })
    }
}