const express = require('express')
const { addUser, updateUser, deleteUser, allUser, Login } = require('../Controller/UserController')
const upload = require('../middleware/multer')
const router = express.Router()

router.get('/',allUser)
router.post('/login',Login)
router.post('/create/',upload.single('pic'),addUser)
router.put('/update/',updateUser)
router.delete('/delete/',deleteUser)


module.exports = router
