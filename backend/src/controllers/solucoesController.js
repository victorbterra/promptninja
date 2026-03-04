import sql from "../config/db.js";
import { AppError } from "../utils/AppError.js";

export const buscarSolucao = async (req, res, next) => {
  try {
    const { sistema, problema } = req.body;

    if (!sistema || !problema) {
      return next(
        new AppError("Escolha o sistema operacional e digite o problema", 400),
      );
    }

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

    if (resultados.length === 0) {
      return next(
        new AppError("Nenhum comando encontrado para este problema.", 404),
      );
    }

    res.json({
      mensagem: "Comandos encontrados com sucesso !",
      totalEncontrado: resultados.length,
      resultados: resultados,
    });
  } catch (erro) {
    next(erro);
  }
};
