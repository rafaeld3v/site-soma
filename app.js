var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Oi, mundo :-)');
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

// soma
app.post('/soma', function (req, res) {
   const {a, b} = req.body;

   res.send(`O resultado da soma de ${a} e ${b} é ${a+b}`);
});

// subtracao
app.post('/subtracao', function (req, res) {
   const {a, b} = req.body;

   res.send(`O resultado da subtração de ${a} e ${b} é ${a-b}`);
});

// multiplicacao
app.post('/multiplicacao', function (req, res) {
   const {a, b} = req.body;

   res.send(`O resultado da multiplicação de ${a} e ${b} é ${a*b}`);
});

// divisao
app.post('/divisao', function (req, res) {
    const {a, b} = req.body;

    res.send(`O resultado da divisão de ${a} e ${b} é ${a/b}`);
});