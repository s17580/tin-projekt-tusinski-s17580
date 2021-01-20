const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Rola = sequelize.define('Rola', {
   rola: {
       type: Sequelize.STRING(15),
       allowNull: false
   },
}, {
    underscored: true
});
module.exports = Rola;