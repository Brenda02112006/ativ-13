const express = require('express');
const mysql = require('mysql2'); // LEMBRAR: $ npm install mysql

const app = express();
// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
host: 'viaduct.proxy.rlwy.net',
user: 'root',
password: 'rznXGsyAVQxXlLQUOvprezqBpjOISiRb',
port: 57181,
database: 'railway'
});
// Conexão com o banco de dados
connection.connect((err) => {
if (err) {
console.error('Erro ao conectar ao banco de dados:', err);
return;
}
console.log('Conexão bem-sucedida ao banco de dados MySQL');
});
module.exports = connection;
