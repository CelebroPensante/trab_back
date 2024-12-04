// ./routes/suppliers.js
var express = require('express');
var router = express.Router();
const auth = require('../auth'); // Carregar os objetos do auth.js

// Implementar as dependencias para o funcionamento da classe Supplier
const db = require('../models'); // Carregando o banco de dados

// Carregando as classes service e controller do supplier
const SupplierService = require('../services/supplierService');
const SupplierController = require('../controllers/supplierController');

// Construir os objetos a partir das classes
const supplierService = new SupplierService(db.Supplier, db.Product);
const supplierController = new SupplierController(supplierService);

/* GET suppliers listing. */
router.get('/', function(req, res, next) {
  res.send('módulo de fornecedores rodando.');
});

// Rota para criação de um novo fornecedor
router.post('/newSupplier', async (req, res) => {
  supplierController.createSupplier(req, res);
});

// Rota para listar todos os fornecedores
router.get('/getAllSuppliers', async (req, res) => {
  supplierController.findAllSuppliers(req, res);
});

// Rota para buscar um fornecedor pelo nome
router.get('/getSupplierByName', async (req, res) => {
  supplierController.findSupplierByName(req, res);
});

// Rota para atualizar um fornecedor pelo nome
router.put('/updateSupplierByName', async (req, res) => {
  supplierController.updateSupplierByName(req, res);
});

// Rota para deletar um fornecedor
router.delete('/deleteSupplier', async (req, res) => {
  supplierController.deleteSupplier(req, res);
});

module.exports = router;