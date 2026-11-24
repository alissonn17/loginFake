import LoginService from "../services/login.service.js";

class LoginController {

    logout(req, res) {
        return res.status(200).json({
            message: "Logout realizado com sucesso"
        });
    }

    async login(req, res) {
        try {
            const loginResult = await LoginService.login(req.body);

            return res.status(200).json({
                message: "Login realizado com sucesso",
                user: loginResult
            });

        } catch (error) {
            console.error("Erro ao realizar login:", error);

            return res.status(401).json({
                message: error.message
            });
        }
    }

    async cadastro(req, res) {
        try {
            const cadastroResult = await LoginService.cadastro(req.body);

            return res.status(201).json({
                message: "Usuário cadastrado com sucesso",
                user: cadastroResult
            });

        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);

            return res.status(400).json({
                message: error.message
            });
        }
    }
}

export default new LoginController();