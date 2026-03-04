# 🛠️ Prompt Ninja API (Backend)

Uma API RESTful desenvolvida em Node.js para fornecer soluções rápidas e comandos de terminal para problemas comuns em sistemas operacionais (Windows e Linux).

## Tecnologias Utilizadas
* **Node.js & Express:** Servidor e rotas da API.
* **PostgreSQL (Supabase):** Banco de dados relacional na nuvem.
* **Postgres.js:** Biblioteca moderna e segura para queries SQL.
* **Express Rate Limit:** Proteção contra ataques de força bruta (DDoS).
* **Tratamento de Erros Customizado:** Middleware global para respostas padronizadas e seguras.

## Como rodar o projeto localmente

1. Clone este repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` na raiz do projeto e adicione a URL do seu banco de dados:
   ```env
   DATABASE_URL=postgresql://usuario:senha@host:porta/banco
   ```
4. Crie as tabelas e insira os dados iniciais:
   ```bash
   node setup.js
   node seed.js
   ```
5. Inicie o servidor:
   ```bash
   npm run dev
   ```

## Endpoints da API

### Listar Sistemas Operacionais
Retorna os sistemas disponíveis no banco de dados.
* **Rota:** `GET /api/sistemas`
* **Resposta de Sucesso (200):**
  ```json
  [
    { "id": "uuid-aqui", "nome": "Linux" },
    { "id": "uuid-aqui", "nome": "Windows" }
  ]
  ```

### Buscar Soluções e Comandos
Busca comandos baseados no sistema escolhido e em uma palavra-chave do problema.
* **Rota:** \`POST /api/solucoes\`
* **Corpo da Requisição (JSON):**
  ```json
  {
    "sistema": "Windows",
    "problema": "ip"
  }
  ```
* **Resposta de Sucesso (200):**
  ```json
  {
    "sucesso": true,
    "totalEncontrado": 2,
    "resultados": [
      {
        "problema": "Pegar um IP novo",
        "codigo_terminal": "ipconfig /renew",
        "explicacao": "Pede um novo IP para o roteador."
      }
    ]
  }
  ```