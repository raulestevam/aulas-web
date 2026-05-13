# Papelaria API — LAB 19

API REST para gerenciamento de produtos de papelaria, construída com **Express.js** e **TypeScript**.

---

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento (sem compilar)
npm run dev

# 3. Ou compilar e rodar
npm run build && npm start
```

O servidor sobe em **http://localhost:3000**

---

## Estrutura de arquivos

```
src/
├── index.ts                        # Entry point (base aula_18)
├── models/
│   └── Produto.ts                  # Classe Produto
├── routes/
│   └── produtos.ts                 # Todas as rotas CRUD
├── validators/
│   └── produtoValidator.ts         # Validações (desafio extra)
└── types.ts                        # Interfaces TypeScript
```

---

## Rotas disponíveis

| Método | Rota              | Descrição              | Status esperado |
|--------|-------------------|------------------------|-----------------|
| GET    | /                 | Health check           | 200             |
| POST   | /produtos         | Cadastrar produto      | 200 / 400       |
| GET    | /produtos         | Listar produtos        | 200             |
| GET    | /produtos/:id     | Buscar por ID          | 200 / 404       |
| PUT    | /produtos/:id     | Atualizar produto      | 200 / 400 / 404 |
| DELETE | /produtos/:id     | Remover produto        | 200 / 404       |

---

## Exemplo de JSON

```json
{
  "id": 1,
  "nome": "Caderno",
  "preco": 12.99,
  "fabricante": {
    "nome": "Tilibra",
    "endereco": {
      "cidade": "Sao Paulo",
      "pais": "Brasil"
    }
  }
}
```

---

## Importar no Postman

1. Abra o Postman
2. Clique em **Import**
3. Selecione o arquivo `Papelaria_API.postman_collection.json`
4. Execute os requests na ordem numérica