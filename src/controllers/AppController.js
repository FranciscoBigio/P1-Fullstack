const service = require('../services/AppService');

exports.createUser = async (req, res) => res.json(await service.createUser(req.body));
exports.getUsers = async (req, res) => res.json(await service.getUsers());

exports.createProduct = async (req, res) => res.json(await service.createProduct(req.body));
exports.getProducts = async (req, res) => res.json(await service.getProducts());