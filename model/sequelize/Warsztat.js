const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Warsztat = sequelize.define('Warsztat', {
   _id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   nazwa_warsztat: {
       type: Sequelize.STRING,
       allowNull: false
   },
   telefon: {
       type: Sequelize.NUMBER,
       allowNull: false
   },
   email: {
       type: Sequelize.STRING,
       allowNull: false,
       unique: true
   }
});
module.exports = Warsztat;