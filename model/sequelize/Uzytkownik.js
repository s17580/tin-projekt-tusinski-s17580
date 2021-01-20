const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Uzytkownik = sequelize.define('Uzytkownik', {
   haslo: {
       type: Sequelize.STRING(30),
       allowNull: false
   },
   email: {
       type: Sequelize.STRING(30),
       allowNull: false,
       unique: true
   }
}, {
    underscored: true
});
module.exports = Uzytkownik;