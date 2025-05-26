import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexão MongoDB - faça isso antes de usar o app
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro na conexão MongoDB:', err));

// Definição do Schema e Modelo da transação
const transacaoSchema = new mongoose.Schema({
  uid: String,
  descricao: String,
  valor: Number,
  tipo: String,
  data: String,
  categoria: String,
});

const Transacao = mongoose.model('Transacao', transacaoSchema);

// Rotas usando Mongoose para consultar/criar/excluir dados

// Listar transações de um usuário
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

// Adicionar transação
app.post("/api/transacoes", async (req, res) => {
  const { uid, descricao, valor, tipo, data, categoria } = req.body;
  if (!uid) return res.status(400).json({ error: "UID não informado" });
  try {
    const novaTransacao = new Transacao({ uid, descricao, valor, tipo, data, categoria });
    const salva = await novaTransacao.save();
    res.json({ id: salva._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Excluir transação
app.delete("/api/transacoes/:id", async (req, res) => {
  const uid = req.header("uid");
  if (!uid) return res.status(400).json({ error: "UID não informado" });
  try {
    const resultado = await Transacao.deleteOne({ _id: req.params.id, uid });
    res.json({ deleted: resultado.deletedCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, '0.0.0.0', () => {
  console.log("Backend rodando na porta 5000");
});

// Exporta o app para testes ou outro uso
export default app;

