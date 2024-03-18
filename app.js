const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Banco de dados simulado de livros
const booksDB = [
  { id: 1, title: 'Jesus, o maior psicólogo que já existiu', author: 'Mark W. Baker', year: 2020 },
  { id: 2, title: 'A travessia', author: 'William P. Youg', year: 2012 },
  { id: 3, title: 'O diário de Anne Frank', author: 'Anne Frank', year: 1950 },
  { id: 4, title: 'o velho e o mar', author: 'Ernest Hemingway', year: 1950 },
  { id: 5, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', year: 1954 },
  { id: 6, title: 'Harry Potter e a Pedra Filosofal', author: 'J.K. Rowling', year: 1997 },
  { id: 7, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 8, title: 'Dom Quixote', author: 'Miguel de Cervantes', year: 1605 },
  { id: 9, title: 'Cem anos de Solidão', author: 'Gabriel García Márquez', year: 1967 },
  { id: 10, title: 'A Revolução dos Bichos', author: 'George Orwell', year: 1945 }
];

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('index', { books: booksDB }); // Renderiza a página inicial com todos os livros

});

// Rota para realizar buscas
app.get('/search', (req, res) => {
  const { title, year } = req.query; // Extrai os parâmetros da consulta
  let results = [];

  // Realiza a busca com base no título
  if (title) {
    results = booksDB.filter(book => book.title && book.title.toLowerCase().includes(title.toLowerCase()));
  // Realiza a busca com base no ano
  } else if (year) {
    results = booksDB.filter(book => book.year === parseInt(year));
  }

  // Verifica se foram encontrados resultados
  if (results.length === 0) {
    // Se não foram encontrados resultados, renderiza a página inicial com uma mensagem
    res.render('index', { books: [], mensagem: 'Nenhum livro encontrado para a busca realizada.' });
  } else {
    // Se foram encontrados resultados, renderiza a página inicial com os livros encontrados
    res.render('index', { books: results });
  }
});


// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
