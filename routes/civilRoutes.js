const qaController = require('../controller/civilQAcontroller');
const router = require('express').Router();
router.post('/',qaController.createMcq);
router.get('/',qaController.getRandomMcqs);

module.exports=router;