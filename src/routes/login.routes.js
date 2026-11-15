import express from 'express';
import LoginController from '../controllers/login.controller.js';

// Agrupa os endpoints relacionados à autenticação.
const router = express.Router();

// Endpoint para autenticar um usuário;
router.post('/login', LoginController.login);

// Endpoint para cadastrar um usuário;
router.post('/cadastro', LoginController.cadastro);

export default router;