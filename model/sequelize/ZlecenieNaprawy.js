const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const ZlecenieNaprawy = sequelize.define('ZlecenieNaprawy', {
   data_od: {
       type: Sequelize.DATE,
       allowNull: false
   },
   data_do: {
       type: Sequelize.DATE,
       allowNull: false
   },
   koszt_naprawy: {
       type: Sequelize.DECIMAL,
       allowNull: false,
       unique: true
   },
}, {
    underscored: true
});
module.exports = ZlecenieNaprawy;