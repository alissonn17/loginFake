import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de LoginFake",
            version: "1.0.0",
            description: "Documentação da API de cadastro e login"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
        components: {
            schemas: {
                LoginInput: {
                    type: "object",
                    required: ["email", "senha"],
                    properties: {
                        email: {
                            type: "string",
                            format: "email",
                            example: "usuario@example.com"
                        },
                        senha: {
                            type: "string",
                            format: "password",
                            example: "senha123"
                        }
                    }
                },
                CadastroInput: {
                    type: "object",
                    required: ["name", "email", "senha"],
                    properties: {
                        name: {
                            type: "string",
                            example: "João Silva"
                        },
                        birthDate: {
                            type: "string",
                            format: "date",
                            example: "2000-01-15"
                        },
                        email: {
                            type: "string",
                            format: "email",
                            example: "usuario@example.com"
                        },
                        cellphone: {
                            type: "string",
                            example: "(11) 99999-9999"
                        },
                        senha: {
                            type: "string",
                            format: "password",
                            example: "senha123"
                        }
                    }
                },
                Usuario: {
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        name: { type: "string", example: "João Silva" },
                        birthDate: { type: "string", format: "date-time", nullable: true },
                        email: { type: "string", format: "email", example: "usuario@example.com" },
                        cellphone: { type: "string", example: "(11) 99999-9999" },
                        createdAt: { type: "string", format: "date-time" },
                        updatedAt: { type: "string", format: "date-time" }
                    }
                },
                CadastroResponse: {
                    type: "object",
                    properties: {
                        message: { type: "string", example: "Usuário cadastrado com sucesso" },
                        user: { $ref: "#/components/schemas/Usuario" }
                    }
                },
                LoginResponse: {
                    type: "object",
                    properties: {
                        message: { type: "string", example: "Login realizado com sucesso" },
                        user: { $ref: "#/components/schemas/Usuario" }
                    }
                },
                ErrorResponse: {
                    type: "object",
                    properties: {
                        message: { type: "string", example: "Usuário ou senha incorretos" }
                    }
                }
            }
        }
    },
    apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;