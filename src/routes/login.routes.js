import express from 'express';
import LoginController from '../controllers/login.controller.js';

// Agrupa os endpoints relacionados à autenticação.
const router = express.Router();

/**
 * @swagger
 * /cadastro:
 *   post:
 *     tags:
 *       - Autenticação
 *     summary: Cadastra um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CadastroInput'
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CadastroResponse'
 *       400:
 *         description: Dados inválidos ou usuário já cadastrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/cadastro', LoginController.cadastro);

/**
 * @swagger
 * /logout:
 *   post:
 *     tags:
 *       - Autenticação
 *     summary: Encerra a sessão do usuário
 *     responses:
 *       200:
 *         description: Logout realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LogoutResponse'
 */
router.post('/logout', LoginController.logout);

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Autenticação
 *     summary: Autentica um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Usuário ou senha incorretos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/login', LoginController.login);

export default router;