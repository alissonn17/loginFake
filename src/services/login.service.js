import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";

class LoginService {
    async login(userData) {
        // Lógica para autenticar o usuário
        try{
            const { email, senha } = userData;

            // Busca o usuário pelo email
            const usuario = await prisma.usuario.findUnique({
                where: { email }
            });

            // Caso não encontre o usuário, lança um erro
            if (!usuario) {
                throw new Error("Usuário não encontrado");
            }

            // Compara a senha informada com a senha armazenada
            const senhaValida = await bcrypt.compare(
                senha,
                usuario.senha
            );

            if (!senhaValida) {
                throw new Error("Senha incorreta");
            }

            return usuario;
        }
        

        catch (error) {
            throw error;
        }
    }

    async cadastro(userData){
        try {
            // Lógica para cadastrar o usuário
            const { name, birthDate, email, cellphone, senha } = userData;

            // Verifica se o usuário já existe
            const usuarioExistente = await prisma.usuario.findUnique({
                where: { email }
            });

            if (usuarioExistente) {
                throw new Error("Usuário já cadastrado");
            }

            // Criptografa a senha antes de salvar
            const senhaCriptografada = await bcrypt.hash(senha, 10);

            // Cria o novo usuário no banco de dados
            const novoUsuario = await prisma.usuario.create({
                data: {
                    name,
                    birthDate,
                    email,
                    cellphone,
                    senha: senhaCriptografada
                }
            });

            return novoUsuario;

        }   catch (error) {
            // Lida com erros de cadastro
            throw error;
        }
    }
}

export default new LoginService();