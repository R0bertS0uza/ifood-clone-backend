const express = require('express');
const router = express.Router();

const ifoodController = require('./controllers/ifoodcontroller');
const cepController = require('./controllers/cepController');

router.get('/cep/:cep', cepController.findByLocalidade);

//CRUD DE USUARIO:

router.get('/users', ifoodController.buscarTodos);
router.get('/user/:id', ifoodController.buscarUm);
router.post('/user', ifoodController.inserir);
router.put('/user/:id', ifoodController.alterar);
router.delete('/user/:id', ifoodController.excluir);

//CRUD DE ENDERECO:

router.get('/endereco', ifoodController.buscarEnderecos);
router.get('/endereco/:id_cep', ifoodController.buscarUmEndereco);
router.post('/endereco', ifoodController.inserirEndereco);
router.put('/endereco/:id_cep', ifoodController.alterarEndereco);
router.delete('/endereco/:id_cep', ifoodController.excluirEndereco);

module.exports = router;