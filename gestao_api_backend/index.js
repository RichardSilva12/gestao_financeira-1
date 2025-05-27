const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexão com o MongoDB
mongoose.connect("mongodb+srv://gestao-victor-p2:Dqa3eH5nRBphjWBp@cluster0.isaityj.mongodb.net/gestao_financeira?retryWrites=true&w=majority")
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro na conexão MongoDB:', err));

// Schema e Modelo
const transacaoSchema = new mongoose.Schema({
  uid: { type: String, required: true }, // Firebase UID como identificador
  descricao: String,
  valor: Number,
  tipo: String,
  data: String,
  categoria: String,
});

const Transacao = mongoose.model('Transacao', transacaoSchema);

// ------------------- ROTAS ------------------- //

// GET /api/transacoes - Listar por UID
app.get("/api/transacoes", async (req, res) => {
  const uid = req.header("uid");
  if (!uid) return res.status(400).json({ error: "UID não informado" });

  try {
    const transacoes = await Transacao.find({ uid });
    res.json(transacoes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/transacoes - Criar nova
app.post("/api/transacoes", async (req, res) => {
  const { uid, descricao, valor, tipo, data, categoria } = req.body;
  if (!uid) return res.status(400).json({ error: "UID não informado" });

  try {
    const novaTransacao = new Transacao({ uid, descricao, valor, tipo, data, categoria });
    const salva = await novaTransacao.save();

    res.json({ id: salva._id.toString() }); // <-- converte para string, compatível com testes
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/transacoes/:id - Remover por ID e UID
app.delete("/api/transacoes/:id", async (req, res) => {
  const uid = req.header("uid");
  const { id } = req.params;
  if (!uid) return res.status(400).json({ error: "UID não informado" });

  try {
    const resultado = await Transacao.deleteOne({ _id: id, uid });
    res.json({ deleted: resultado.deletedCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Iniciar servidor apenas se não estiver em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(5000, () => {
    console.log("Backend rodando na porta 5000");
  });
}

// Exportar para testes
module.exports = app;

