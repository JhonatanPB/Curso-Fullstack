const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));

//Variável com os dados
const alimentos = [
    {id: 1, nome: "Feijão", preco: 10},
    {id: 2, nome: "Carne", preco: 50},
    {id: 3, nome: "Frutas", preco: 70},
    {id: 4, nome: "Sopas", preco: 40}
];

const tiposPratos = [
    {id: 1, nome: "lasanha", preco: 20},
    {id: 2, nome: "panquecas", preco: 15},
    {id: 3, nome: "carne-moida", preco: 10},
    {id: 4, nome: "miojo", preco: 5}
];

// Criar uma função
// Rota principal
app.get('/', (req, res) => {
    res.send("Bem vindo ao meu pojeto de Alimentos");
});

// Produtos
app.get('/produtos', (req, res) => {
    res.send(alimentos);
})

// Rota Home
app.get('/home', (req, res) => {
    // console.log("olá", __dirname)
    res.sendFile(__dirname + '/public/index.html');

})

app.get('/tiposPratos', (req, res) => {
    res.send(tiposPratos)
});

//Executando o servidor 
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});