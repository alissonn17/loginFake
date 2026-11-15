import LoginService from "../services/login.service.js";

class LoginController {
    async login(req, res){
        try {
            // Lógica para autenticar o usuário
            await LoginService.login(req.body);

            // implementar codigo aqui para verificar se o login foi bem-sucedido e retornar a resposta adequada usando o login service

            return res.status(200).json({ message: "Login OK" });
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            return res.status(500).json({ message: "Erro ao realizar login" });
        }
    }
    async cadastro(req, res) {   
        try {
            // Lógica para cadastrar o usuário
            const cadastroResult = await LoginService.cadastro(req.body);
        } catch (error) {
            // Lida com erros de cadastro
        }
    }
}

export default new LoginController();