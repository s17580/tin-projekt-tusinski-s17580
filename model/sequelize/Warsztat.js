const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Warsztat = sequelize.define('Warsztat', {
   nazwa_warsztat: {
       type: Sequelize.STRING,
       allowNull: false
   },
   telefon: {
       type: Sequelize.STRING,
       allowNull: false
   },
   email: {
       type: Sequelize.STRING,
       allowNull: false,
       unique: true
   }
}, {
    underscored: true
});
module.exports = Warsztat;