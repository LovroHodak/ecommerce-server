const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ecommerce1', 
{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB ecommerc connected')
    })
    .catch((err) => {
        console.log('Error: ', err)
})