import sql from '../../config/db.js';

export const buscarSolucao = async (req, res) => {
    try{
        const {sistema, problema } = req.body;

        const termoBusca = `%${problema}%`;

        const resultados = await sql`
        SELECT
            c.problema,
            c.codigo_terminal,
            c.explicacao
        FROM comandos c
        JOIN sistemas s ON c.id_sistema = s.id
        WHERE
            s.nome ILIKE ${sistema} AND
            c.problema ILIKE ${termoBusca}
        `;

        if(resultados.length === 0) {
            return res.status(404).json({
                mensagem:"Não encontramos nenhum comandos para isso.",
                resultados: []
            });
        }

        res.json({
            mensagem:"Comandos encontrados com sucesso !",
            totalEncontrado:resultados.length,
            resultados: resultados
        })
    } catch(erro) {
        console.error("Erro na busca",erro.message);
        res.status(500).json({erro:"Erro interno do servidor."});
    }
}