const qaController = require('../controller/electronicsQAcontroller');
const router = require('express').Router();
router.post('/',qaController.createMcq);
router.get('/',qaController.getRandomMcqs);

module.exports=router;