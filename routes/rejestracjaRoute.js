const express = require('express');
const router = express.Router();
const rejestracjaControler = require('../controllers/rejestracjaController');

router.get('/', rejestracjaControler.showRejestracjaList);

module.exports = router;