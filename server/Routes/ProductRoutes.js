const express = require('express')
const { allproduct, addproduct, updateproduct, deleteproduct, oneproduct } = require("../Controller/ProductController")
const router = express.Router()
const upload = require("../middleware/multer")

router.get('/',allproduct)   
router.post('/create',addproduct)
router.post('/update/:id',updateproduct)
router.delete('/delete/:id',deleteproduct)
router.get('/one/:id',oneproduct)


module.exports = router
