const express = require('express')
const router = express.Router()
const itemModel = require('../models/item.model')

//that means your browser route is: localhost:5050/api/items
router.get('/items', (req, res) => {
    itemModel.find()
        .then((stuff) => {
            //console.log(stuff)
            res.status(200).json(stuff)
        })
})

module.exports = router