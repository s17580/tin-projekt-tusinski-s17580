const express = require('express');
const router = express.Router();
const warsztatControler = require('../controllers/warsztatController');

router.get('/', warsztatControler.showWarsztatList);
router.get('/add', warsztatControler.showAddWarsztatForm);
//router.get('/details/:samochodId', samochodControler.showSamochodDetails);
module.exports = router;