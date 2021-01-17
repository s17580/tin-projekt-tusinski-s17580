const express = require('express');
const router = express.Router();
const zlecenieNaprawyControler = require('../controllers/zlecenieNaprawyController');

router.get('/', zlecenieNaprawyControler.showZlecenieNaprawyList);
router.get('/add', zlecenieNaprawyControler.showAddZlecenieNaprawyForm);
//router.get('/details/:samochodId', samochodControler.showSamochodDetails);
module.exports = router;