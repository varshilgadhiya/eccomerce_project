const express = require('express')
const { AddToCart, allcart, usercart, deletecart, deleteItem, onecart } = require('../Controller/CartController')
const router = express.Router()

router.post('/add-item',AddToCart)
router.get('/',allcart)
router.get('/one/:id',onecart)
router.get('/:id',usercart)
router.delete('/delete/:id',deletecart)
router.delete('/delete/item/:id/:index',deleteItem)


module.exports = router