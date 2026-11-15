import PrismaClient from "@prisma/client";

const prisma = new PrismaClient();

class LoginService {
    async login(userData){
        try {
            // Lógica para autenticar o usuário
        }   catch (error) {
            // Lida com erros de autenticação
        }
    }

    async cadastro(userData){
        try {
            // Lógica para cadastrar o usuário
        }   catch (error) {
            // Lida com erros de cadastro
        }
    }
}

export default new LoginService();