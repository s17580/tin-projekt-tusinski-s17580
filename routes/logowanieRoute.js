const express = require('express');
const router = express.Router();
const logowanieControler = require('../controllers/logowanieController');

router.get('/', logowanieControler.showLogowanieList);

module.exports = router;