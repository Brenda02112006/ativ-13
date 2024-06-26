
//FUNÇÃO QUE DEFINE ROTAS DA APLICAÇÃO = renderhomepage e searchbooks

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

//rederiza para a página inicial
function renderHomePage(req, res) { 
  res.render('index', { books: booksDB }); //arquivo index para matriz e livros
}

//página inicial com os livros
function searchBooks(req, res) {
  const { title, year } = req.query;
  let results = [];

  if (title) { // se receber title, vai filtrar o titulo
    results = booksDB.filter(book => book.title && book.title.toLowerCase().includes(title.toLowerCase()));
  } else if (year) {
    results = booksDB.filter(book => book.year === parseInt(year));
  }

  res.render('index', { books: results }); // Sempre envie a variável books
}


module.exports = {
  renderHomePage,
  searchBooks
};
