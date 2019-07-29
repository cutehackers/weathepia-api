'use strict';

const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres:1111@localhost:5432/postgres');
const sequelize = new Sequelize('postgres://eeiqjglgybuyhb:b561436322cc6f97034f1410c364bf7c7bc977d34c508470e736c5d10921c362@ec2-23-21-177-102.compute-1.amazonaws.com:5432/d9b8h8elubggv3');

sequelize.import('./models/Users');
sequelize.import('./models/WeatherChannels');
sequelize.import('./models/Articles');

module.exports = sequelize;