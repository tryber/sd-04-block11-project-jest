// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.
const https = require('https');

const url = 'https://randomuser.me/api/';

const fetchURL = () => new Promise(function (resolve, reject) { // Retorna a promisse
  https.get(url, (res) => {
    res.setEncoding('utf8'); // retorna como texto
    let userInfo = '';
    res.on('data', (data) => {
      userInfo += data;
    });
    res.on('error', reject);
    res.on('close', () => resolve(JSON.parse(userInfo).results[0])); // recebe um texto no formato JSON, transf obj
  });
});

module.exports = { fetchURL };
