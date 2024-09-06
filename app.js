const express = require('express');


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('public'));

app.use(urlencoded({ extended: true }));


let usuarios = [
  { nome: 'Jonas', idade: 19 }
];


app.get('/', (req, res) => {

  res.render('index', { usuarios: usuarios });
});


app.post('/adicionar', (req, res) => {
  const novoUsuario = {
    nome: req.body.nome,
    idade: parseInt(req.body.idade)  
  };

usuarios.push(novoUsuario);
  
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
