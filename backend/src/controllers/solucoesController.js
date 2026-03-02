export const buscarSolucao = (req, res) => {
    const {sistema, problema } = req.body;

    res.json({
        mensagem:"Problema recebido com sucesso!",
        sistemaInformado: sistema,
        problemaInformado:problema,
        comandoSugerido:"sfc /scannow",
        explicacao:"Este comando verifica e corrige arquivos corrompidos no sistema."
    })
}