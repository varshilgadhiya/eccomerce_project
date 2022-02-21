const express = require('express')
const { AddToCart, allcart, usercart } = require('../Controller/CartController')
const router = express.Router()

router.post('/add-item',AddToCart)
router.get('/',allcart)
router.get('/:id',usercart)


module.exports = router