import prisma from "../config/prisma.js";

class LoginService {
    async login(userData) {
        // Lógica para autenticar o usuário
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