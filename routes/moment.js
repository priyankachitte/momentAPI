var express = require('express');
var router = express.Router();
var momentController = require('../controller/momentController');

router.post('/', momentController.createMoment);

router.put('/:id', momentController.updateMoment);

router.delete('/:id', momentController.deleteMoment);

router.get('/:userId', momentController.getMomentByUser);

module.exports = router;
