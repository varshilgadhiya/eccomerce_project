const express = require('express')
const { allproduct, addproduct, updateproduct, deleteproduct } = require('../Controller/ProductController')
const {  } = require('../Controller/ProductController')
const upload = require('../middleware/multer')
const router = express.Router()

router.get('/',allproduct)
router.post('/create/product',addproduct)
router.put('/update/product',updateproduct)
router.delete('/delete/product',deleteproduct)


module.exports = router
