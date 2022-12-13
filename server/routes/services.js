const express = require('express');
const router = express.Router();

// Get All
router.get('/', (req, res, next) => {
    res.status(200).send( {
        Mensagem : "Retornando todos os Serviços."
    });
});
// Get by ID
router.get('/:id', (req, res, next) => {
    res.status(200).send({
        Mensagem : "Retornando Serviço por id."
    });
});
// Post
router.post('/', (req, res, next) => {
    const service = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).send({
        Mensagem : "Serviço cadastrado",
        service : service

    });
});
// Patch
router.patch('/:id', (req, res, next) => {
    res.status(200).send({
        Mensagem: "Alterando dados de um Serviço."
    });
});
// Delete
router.delete('/:id', (req, res, next) => {
    res.status(204).send({
        Mensagem: "Serviço Deletado."
    });
});
module.exports = router;