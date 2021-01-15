const express = require('express');
const router = express.Router();
const adresControler = require('../controllers/adresController');

router.get('/', adresControler.showAdresList);
router.get('/add', adresControler.showAddAdresForm);
//router.get('/details/:samochodId', samochodControler.showSamochodDetails);
module.exports = router;