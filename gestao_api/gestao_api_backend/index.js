const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");  //teste 01
const sqlite3 = require("sqlite3").verbose();

const app = express(); 
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database(":memory:");

// Cria tabela de transações
db.serialize(() => {
  db.run(`CREATE TABLE transacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uid TEXT,
    descricao TEXT,
    valor REAL,
    tipo TEXT,
    data TEXT,
    categoria TEXT
  )`);
});

// Listar transações de um usuário
app.get("/api/transacoes", (req, res) => {
  const uid = req.header("uid");
  if (!uid) return res.status(400).json({ error: "UID não informado" });
  db.all("SELECT * FROM transacoes WHERE uid = ?", [uid], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Adicionar transação
app.post("/api/transacoes", (req, res) => {
  const { uid, descricao, valor, tipo, data, categoria } = req.body;
  if (!uid) return res.status(400).json({ error: "UID não informado" });
  db.run(
    "INSERT INTO transacoes (uid, descricao, valor, tipo, data, categoria) VALUES (?, ?, ?, ?, ?, ?)",
    [uid, descricao, valor, tipo, data, categoria],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Excluir transação (opcional: só permite se o uid bater)
app.delete("/api/transacoes/:id", (req, res) => {
  const uid = req.header("uid");
  if (!uid) return res.status(400).json({ error: "UID não informado" });
  db.run(
    "DELETE FROM transacoes WHERE id = ? AND uid = ?",
    [req.params.id, uid],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ deleted: this.changes });
    }
  );
});

app.listen(5000, () => {
  console.log("Backend rodando na porta 5000");
});