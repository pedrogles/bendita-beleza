const express = require('express');
const router = express.Router();

// Get All
router.get('/', (req, res, next) => {
    res.status(200).send( {
        Mensagem : "Retornando todos os Agendamentos."
    });
});
// Get by ID
router.get('/:id', (req, res, next) => {
    res.status(200).send({
        Mensagem : "Retornando Agendamento por ID."
    });
});
// Post
router.post('/', (req, res, next) => {
    const scheduling = {
        employeeName: req.body.employeeName,
        date: req.body.date,
        hour: req.body.hour
    };
    res.status(201).send({
        Mensagem : "Agendamento realizado com sucesso",
        scheduling : scheduling

    });
});
// Patch
router.patch('/:id', (req, res, next) => {
    res.status(200).send({
        Mensagem: "Alterando dados do agendamento."
    });
});
// Delete
router.delete('/:id', (req, res, next) => {
    res.status(204).send({
        Mensagem: "Agendamento Deletado."
    });
});
module.exports = router;