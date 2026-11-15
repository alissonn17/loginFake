import LoginService from "../services/login.service.js";

class LoginController {
    async login(req, res){
        try {
            // Lógica para autenticar o usuário
            const loginResult = await LoginService.login(req.body);
        } catch (error) {
            // Lida com erros de autenticação
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