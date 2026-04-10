const { UserRepository, ProductRepository } = require('../repositories/GenericRepository');
const userRepo = new UserRepository();
const prodRepo = new ProductRepository();

class AppService {
  // Usuários (MySQL)
  async createUser(data) { return await userRepo.create(data); }
  async getUsers() { return await userRepo.getAll(); }

  // Produtos (MongoDB)
  async createProduct(data) { return await prodRepo.create(data); }
  async getProducts() { return await prodRepo.getAll(); }
}

module.exports = new AppService();