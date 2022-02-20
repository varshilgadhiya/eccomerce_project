const express = require('express')
const { allproduct, addproduct, updateproduct, deleteproduct } = require('../Controller/ProductController')
const router = express.Router()

router.get('/',allproduct)
router.post('/create',addproduct)
router.put('/update',updateproduct)
router.delete('/delete/:id',deleteproduct)


module.exports = router
