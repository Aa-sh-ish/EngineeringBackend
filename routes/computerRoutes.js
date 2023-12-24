const qaController = require('../controller/computerQAcontroller');
const router = require('express').Router();
router.post('/',qaController.createMcq);
router.get('/',qaController.getRandomMcqs);

module.exports=router;