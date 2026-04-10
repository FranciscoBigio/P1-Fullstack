// UserRepository.js (Exemplo MySQL)
const User = require('../models/User');
class UserRepository {
  async create(data) { return await User.create(data); }
  async getAll() { return await User.findAll(); }
}

// ProductRepository.js (Exemplo MongoDB)
const Product = require('../models/Product');
class ProductRepository {
  async create(data) { return await Product.create(data); }
  async getAll() { return await Product.find(); }
}

module.exports = { UserRepository, ProductRepository };