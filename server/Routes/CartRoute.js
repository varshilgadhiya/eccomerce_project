const express = require('express')
const { AddToCart, allcart, usercart, deletecart } = require('../Controller/CartController')
const router = express.Router()

router.post('/add-item',AddToCart)
router.get('/',allcart)
router.get('/:id',usercart)
router.delete('/delete/:id',deletecart)


module.exports = router