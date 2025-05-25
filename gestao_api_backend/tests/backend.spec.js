
const request = require('supertest');
const express = require('express');
const app = require('../index'); 

describe('GET /api/transacoes', () => {
  it('deve retornar erro se UID não for informado', async () => {
    const res = await request(app).get('/api/transacoes');
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: "UID não informado" });
  });

  it('deve retornar array de transações para UID válido', async () => {
    const res = await request(app)
      .get('/api/transacoes')
      .set('uid', '123');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /api/transacoes', () => {
  it('deve retornar erro se UID não for informado', async () => {
    const res = await request(app)
      .post('/api/transacoes')
      .send({
        descricao: 'Teste',
        valor: 100,
        tipo: 'entrada',
        data: '2024-05-23',
        categoria: 'Salário'
      });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: "UID não informado" });
  });

  it('deve adicionar uma transação com sucesso', async () => {
    const res = await request(app)
      .post('/api/transacoes')
      .send({
        uid: '123',
        descricao: 'Teste',
        valor: 100,
        tipo: 'entrada',
        data: '2024-05-23',
        categoria: 'Salário'
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(typeof res.body.id).toBe('number');
  });
});

describe('DELETE /api/transacoes/:id', () => {
  it('deve retornar erro se UID não for informado', async () => {
    const res = await request(app)
      .delete('/api/transacoes/1');
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: "UID não informado" });
  });
  it('deve deletar uma transação existente', async () => {
    const postRes = await request(app)
      .post('/api/transacoes')
      .send({
        uid: '123',
        descricao: 'Teste',
        valor: 100,
        tipo: 'entrada',
        data: '2024-05-23',
        categoria: 'Salário'
      });
    const id = postRes.body.id;
    const delRes = await request(app)
      .delete(`/api/transacoes/${id}`)
      .set('uid', '123');
    expect(delRes.statusCode).toBe(200);
    expect(delRes.body).toHaveProperty('deleted', 1);
  });
  it('deve retornar deleted: 0 se a transação não existir', async () => {
    const res = await request(app)
      .delete('/api/transacoes/9999')
      .set('uid', '123');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('deleted', 0);
  });
});
