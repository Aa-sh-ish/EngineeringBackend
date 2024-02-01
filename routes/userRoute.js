const router = require('express').Router();
const userController = require('../controller/userController')

const  {verifyAndAuthorization}= require('../middleware/verifyToken')

router.get('/:id',verifyAndAuthorization,userController.getUser)
router.delete('/',verifyAndAuthorization,userController.deleteUser)
router.put('/',verifyAndAuthorization,userController.UpdateUser)

module.exports=router;