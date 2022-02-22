const express = require('express')
const { allproduct, addproduct, updateproduct, deleteproduct, oneproduct } = require("../Controller/ProductController")
const router = express.Router()
const upload=require("../middleware/multer")

router.get('/',allproduct)
router.get('/one/:id',oneproduct)
router.post('/create',upload.array("productpic"),addproduct)
router.post('/update/:id',updateproduct)
router.delete('/delete/:id',deleteproduct)
router.get('/one/:id',oneproduct)


module.exports = router
