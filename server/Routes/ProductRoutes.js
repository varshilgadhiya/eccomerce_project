const express = require('express')
const { allproduct, addproduct, updateproduct, deleteproduct } = require('../Controller/ProductController')
const router = express.Router()
const upload = require("../middleware/multer")

router.get('/',allproduct)
router.post('/create',upload.array("productpic"),addproduct)
router.put('/update',updateproduct)
router.delete('/delete/:id',deleteproduct)


module.exports = router
