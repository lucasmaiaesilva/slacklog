const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/', controllers.showHome);
router.get('/logs', controllers.getLogs);
router.post('/slack', controllers.handleLogs);

module.exports = router;
