const express = require('express')
const { getinfo, createinfo, updateinfo, deleteinfo } = require('../Controller/RegistrationController')
const router = express.Router()

router.get('/registration',getinfo)
router.post('/create/registration',createinfo)
router.put('/update/registration',updateinfo)
router.delete('/delete/registration',deleteinfo)


module.exports = router
