const { Sequelize } = require('sequelize');
const mongoose = require('mongoose');

// MySQL via Sequelize
const sequelize = new Sequelize('app_db', 'root', 'root', {
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mysql'
});

// MongoDB via Mongoose
const connectMongo = async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/app_db');
};

module.exports = { sequelize, connectMongo };