const express = require('express');
const router = express.Router();
const samochodControler = require('../controllers/samochodController');

router.get('/', samochodControler.showSamochodList);
router.get('/add', samochodControler.showAddSamochodForm);
router.get('/details/:samochodId', samochodControler.showSamochodDetails);
module.exports = router;





