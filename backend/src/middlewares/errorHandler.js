export const errorHandler = (error,req,res,next) => {
    const status = error.statusCode || 500;

    const mensagem = error.message || "Ocorreu um erro interno no servidor."

    console.error(`[ERRO ${status}]`, error.message);

    res.status(status).json({
        sucesso:false,
        mensagem: mensagem
    });
}