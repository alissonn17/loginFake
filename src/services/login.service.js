
import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";

class LoginService {

    async login(userData) {
        const { email, senha } = userData;

        const usuario = await prisma.user.findUnique({
            where: { email }
        });

        if (!usuario) {
            throw new Error("Usuário ou senha incorretos");
        }

        const senhaValida = await bcrypt.compare(
            senha,
            usuario.senha
        );

        if (!senhaValida) {
            throw new Error("Usuário ou senha incorretos");
        }

        // Retorna somente informações públicas
        const { senha: _, ...usuarioPublico } = usuario;

        return usuarioPublico;
    }

    async cadastro(userData) {
        const { name, birthDate, email, cellphone, senha } = userData;

        const usuarioExistente = await prisma.user.findUnique({
            where: { email }
        });

        if (usuarioExistente) {
            throw new Error("Usuário já cadastrado");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const novoUsuario = await prisma.user.create({
            data: {
                name,
                birthDate: new Date(birthDate),
                email,
                cellphone,
                senha: senhaCriptografada
            },
            select: {
                id: true,
                name: true,
                birthDate: true,
                email: true,
                cellphone: true
            }
        });

        return novoUsuario;
    }
}

export default new LoginService();
