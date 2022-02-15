const express = require('express')
const { addUser, updateUser, deleteUser, allUser, Login } = require('../Controller/UserController')
const router = express.Router()

router.get('/',allUser)
router.post('/login',Login)
router.post('/create/',addUser)
router.put('/update/',updateUser)
router.delete('/delete/',deleteUser)


module.exports = router
