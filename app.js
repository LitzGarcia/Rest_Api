const express = require('express');
const port = 3000;
const app = express();

// Middleware para processar JSON
app.use(express.json());

// Arrays para armazenar os dados (simulando um banco de dados)
let livros = [];
let usuarios = [];

// Rota raiz
app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo à API da Biblioteca!' });
});

// Rotas para Livros
// Listar todos os livros
app.get('/livros', (req, res) => {
    res.json(livros);
});

// Buscar um livro pelo ID
app.get('/livros/:id', (req, res) => {
    const livro = livros.find(l => l.id === parseInt(req.params.id));
    if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });
    res.json(livro);
});

// Criar um novo livro
app.post('/livros', (req, res) => {
    const livro = {
        id: livros.length + 1,
        titulo: req.body.titulo,
        autor: req.body.autor,
        anoPublicacao: req.body.anoPublicacao,
        numeroPaginas: req.body.numeroPaginas
    };
    livros.push(livro);
    res.status(201).json(livro);
});

// Atualizar um livro
app.put('/livros/:id', (req, res) => {
    const livro = livros.find(l => l.id === parseInt(req.params.id));
    if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });
    
    livro.titulo = req.body.titulo;
    livro.autor = req.body.autor;
    livro.anoPublicacao = req.body.anoPublicacao;
    livro.numeroPaginas = req.body.numeroPaginas;
    
    res.json(livro);
});

// Remover um livro
app.delete('/livros/:id', (req, res) => {
    const livroIndex = livros.findIndex(l => l.id === parseInt(req.params.id));
    if (livroIndex === -1) return res.status(404).json({ message: 'Livro não encontrado' });
    
    livros.splice(livroIndex, 1);
    res.status(204).send();
});

// Rotas para Usuários
// Listar todos os usuários
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

// Buscar um usuário pelo ID
app.get('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(usuario);
});

// Criar um novo usuário
app.post('/usuarios', (req, res) => {
    const usuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email,
        dataInscricao: new Date().toISOString()
    };
    usuarios.push(usuario);
    res.status(201).json(usuario);
});

// Atualizar um usuário
app.put('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
    
    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    
    res.json(usuario);
});

// Remover um usuário
app.delete('/usuarios/:id', (req, res) => {
    const usuarioIndex = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    if (usuarioIndex === -1) return res.status(404).json({ message: 'Usuário não encontrado' });
    
    usuarios.splice(usuarioIndex, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});