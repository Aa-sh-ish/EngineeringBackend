const router = require('express').Router();
const rankConteroller = require('../controller/rankscontroller');
const  {verifyAndAuthorization}= require('../middleware/verifyToken')

router.post('/',verifyAndAuthorization,rankConteroller.postUserRanks)
router.patch('/regular_rank',verifyAndAuthorization,rankConteroller.updateregularrank);
router.patch('/daily_rank',verifyAndAuthorization,rankConteroller.updatedailyrank);
router.patch('/weekly_rank',verifyAndAuthorization,rankConteroller.updateweeklyrank);
router.get('/',verifyAndAuthorization,rankConteroller.getallranks);


module.exports = router;