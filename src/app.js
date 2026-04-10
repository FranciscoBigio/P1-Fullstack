const express = require('express');
const { sequelize, connectMongo } = require('./config/database');
const controller = require('./controllers/AppController');

const app = express();
app.use(express.json());

// Rotas MySQL (Users)
app.post('/users', controller.createUser);
app.get('/users', controller.getUsers);

// Rotas MongoDB (Products)
app.post('/products', controller.createProduct);
app.get('/products', controller.getProducts);

const start = async () => {
  try {
    await sequelize.sync(); // Sincroniza MySQL
    await connectMongo();   // Conecta MongoDB
    app.listen(3000, () => console.log('🚀 Server running on port 3000'));
  } catch (err) {
    console.error('Failed to start:', err);
  }
};

start();