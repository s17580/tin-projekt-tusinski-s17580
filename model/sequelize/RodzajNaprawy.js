const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const RodzajNaprawy = sequelize.define('RodzajNaprawy', {
   rodzaj: {
       type: Sequelize.STRING(50),
       allowNull: false
   },
}, {
    underscored: true
});
module.exports = RodzajNaprawy;