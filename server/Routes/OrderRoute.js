const express = require('express')
const { newOrder, allOrder } = require('../Controller/OrderController')
const router = express.Router()

router.post('/add',newOrder)
router.get('/',allOrder)


module.exports = router