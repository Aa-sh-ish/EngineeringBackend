const router = require('express').Router();
const userController = require('../controller/userController')

const  {verifyAndAuthorization}= require('../middleware/verifyToken')

router.get('/',verifyAndAuthorization,userController.getAllUsers)
router.get('/:id',verifyAndAuthorization,userController.getUser)
router.delete('/:id',verifyAndAuthorization,userController.deleteUser)
router.patch('/',userController.updateUserPassword)
router.patch("/regularRank",verifyAndAuthorization,userController.updateUserRegularNumber);

module.exports=router;