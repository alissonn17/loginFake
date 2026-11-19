import LoginService from "../services/login.service.js";

class LoginController {
    async login(req, res){
        try {
            // Lógica para autenticar o usuário
            const loginResult = await LoginService.login(req.body);

            return res.status(200).json({ message: "Login Realizado", user: loginResult });
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
            console.error("Erro ao cadastrar usuário:", error);
            return res.status(500).json({ message: "Erro ao cadastrar usuário" });
        }
    }
}

export default new LoginController();