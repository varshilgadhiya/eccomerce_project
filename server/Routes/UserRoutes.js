const express = require('express')
const { addUser, updateUser, deleteUser, allUser, Login, oneUser } = require('../Controller/UserController')
const { verifyAccessToken } = require('../middleware/jwt')
const upload = require('../middleware/multer')
const router = express.Router()

router.get('/',verifyAccessToken,allUser)
router.post('/login',Login)
router.get('/user/:id',verifyAccessToken,oneUser)
router.post('/create/',upload.single('pic'),addUser)
router.put('/update/',verifyAccessToken,updateUser)
router.delete('/delete/',verifyAccessToken,deleteUser)


module.exports = router
