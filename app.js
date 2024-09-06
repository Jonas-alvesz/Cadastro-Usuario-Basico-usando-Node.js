// npm install express --save
const express = require('express');
// npm install body-parser --save

const app = express();
const port = 3000;

// npm install ejs --save
app.set('view engine', 'ejs');
app.set('views', './views');

// Configura a pasta public para arquivos estáticos
app.use(express.static('public'));

// Configura o body-parser para analisar corpos de requisição
app.use(urlencoded({ extended: true }));


// Dados a serem passados para o template
let usuarios = [
  { nome: 'Jonas', idade: 19 }
];

// Rota para renderizar a página inicial
app.get('/', (req, res) => {
  // Passa a lista de usuários para o template EJS
  res.render('index', { usuarios: usuarios });
});

// Rota para lidar com o envio do formulário para adicionar um novo usuário
app.post('/adicionar', (req, res) => {
  const novoUsuario = {
    nome: req.body.nome,
    idade: parseInt(req.body.idade)  // Converte a idade para número inteiro
  };

  // Adiciona o novo usuário à lista
  usuarios.push(novoUsuario);
  
  // Redireciona de volta para a página inicial após adicionar o usuário
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});