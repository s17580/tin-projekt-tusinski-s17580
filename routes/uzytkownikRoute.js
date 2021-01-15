const express = require('express');
const router = express.Router();
const uzytkownikControler = require('../controllers/uzytkownikController');

router.get('/', uzytkownikControler.showUzytkownikList);
//router.get('/add', samochodControler.showAddSamochodForm);
//router.get('/details/:samochodId', samochodControler.showSamochodDetails);
module.exports = router;