const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// Get All
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error})};
        conn.query(
            'SELECT * FROM tb_clients;',
            (error, result, field) => {
                conn.release();
                if(error) { return res.status(500).send({ error: error})};
                res.status(200).send({ response: result});
            }
        )
    })
});
// Get by ID
router.get('/:id', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })};
        conn.query(
            'SELECT * FROM tb_clients WHERE CL_ID = ?;',
            [req.params.id],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error})};
                res.status(200).send({response: result});
            }
        )
    })
});
// Post
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({ error: error })};
        conn.query(
            'INSERT INTO tb_clients (CL_NAME, CL_CPF, CL_EMAIL, CL_BIRTH, CL_PHONE, CL_PASSWORD) VALUES (?,?,?,?,?,?);',
            [req.body.name, req.body.cpf, req.body.email, req.body.birth, req.body.phone, req.body.password],
            (error, result, field) => {
                conn.release();
                if (error) {return res.status(500).send({ error: error })};
                res.status(201).send({
                    Mensagem : "Cliente cadastrado com sucesso!",
                    client_id : result.insertId
                });
            }
        )
    })
});
// Patch
router.patch('/:id', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error})};
        conn.query (
            'UPDATE tb_clients SET CL_NAME = ?, CL_CPF = ?, CL_EMAIL = ?, CL_BIRTH = ?, CL_PHONE = ?, CL_PASSWORD = ? WHERE CL_ID = ?',
            [req.body.name, req.body.cpf, req.body.email, req.body.birth, req.body.phone, req.body.password, req.params.id],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error})};
                res.status(200).send({
                    Mensagem: "Dados alterados com sucesso!"
                });
            }
        )
    })
});
// Delete
router.delete('/:id', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error})};
        conn.query(
            'DELETE FROM tb_clients WHERE CL_ID = ?',
            [req.params.id],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error})};
                res.status(204).send({
                    Mensagem: "Cliente deletado com sucesso!"
                });
            }
        )
    })
});

module.exports = router;