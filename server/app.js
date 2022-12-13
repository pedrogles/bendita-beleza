const express = require('express');
const morgan = require('morgan'); //Monitora a execução e nos da um log(Morgan).

const clientsRouter = require('./routes/Clients'); // Pegando o arqivo Clients.js
const servicesRoter = require('./routes/services');
const schedulingsRouter = require('./routes/schedulings');


const app = express();

app.use(express.urlencoded({ extended: false})); // Apenas dados simples.
app.use(express.json());

app.use(morgan('dev'));

app.use('/clients', clientsRouter);
app.use('/schedulings', schedulingsRouter);
app.use('/services', servicesRoter);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send({})
    };
    next();
});

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;