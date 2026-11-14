import express from 'express';

// Agrupa os endpoints relacionados à autenticação.
const login = express.Router();

// Endpoint para autenticar um usuário;
login.post('/login', (req, res) => {});

// Endpoint para cadastrar um usuário;
login.post('/cadastro', (req, res) => {});

export default login;