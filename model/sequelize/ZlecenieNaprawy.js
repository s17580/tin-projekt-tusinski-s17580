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
       type: Sequelize.DECIMAL(7,2),
       allowNull: false,
    }
}, {
    underscored: true
});
module.exports = ZlecenieNaprawy;