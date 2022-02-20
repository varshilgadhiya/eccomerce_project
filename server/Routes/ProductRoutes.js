const express = require('express')
const { allproduct, addproduct, updateproduct, deleteproduct } = require('../Controller/ProductController')
const {  } = require('../Controller/ProductController')
const upload = require('../middleware/multer')
const router = express.Router()

router.get('/',allproduct)
router.post('/create',addproduct)
router.put('/update',updateproduct)
router.delete('/delete',deleteproduct)


module.exports = router
