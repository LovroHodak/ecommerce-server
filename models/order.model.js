const mongoose = require('mongoose')

let orderSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userLastName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemPrice: {
        type: String,
        required: true
    },
    nrOfBasketItems: {
        type: String,
        required: true
    },
    nrOfSameBasketItems: {
        type: String,
        required: true
    },
    priceOfAllItems: {
        type: String,
        required: true
    }},
    {
        timestamps: true
    })

let Order = mongoose.model('order', orderSchema)

module.exports = Order

