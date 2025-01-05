const express = require("express");
const handlebars = require("express-handlebars");
const userController = require("./controllers/userControll");

const app = express();

//carregando o cabeçalho do handlebars
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ROTAS
//rota principal
app.get("/", userController.renderUsers);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
