const router = require('express').Router();
const mongoCtrl = require('./mongoCtrl.js');

router.get('/bears', mongoCtrl.bears.get);
router.post('/bears', mongoCtrl.bears.post);

router.get('/favorites', mongoCtrl.favorites.get);
router.post('/favorites', mongoCtrl.favorites.post);

module.exports = router;