const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'YNRCAJ//7', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;