import express from "express";
import cors from "cors";
import "./src/config/db.js";
import solucoesRoutes from "./src/routes/solucoesRoutes.js";
import sistemasRoutes from "./src/routes/sistemasRoutes.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import { limitadorGeral } from "./src/middlewares/rateLimiter.js";

const app = express();
const PORT = 3000;

app.use(limitadorGeral);

app.use(express.json());
app.use(cors());

app.use("/api", solucoesRoutes);
app.use("/api", sistemasRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
  console.log(`Acesse no navegador: http://localhost:${PORT}`);
});
