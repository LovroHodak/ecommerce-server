require('dotenv').config()
require('./config/db.config')
const express = require('express')
const app = express()
const port = process.env.PORT

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'))

const cors = require('cors')
app.use(cors({
  credentials: true, 
  origin: ['http://localhost:3000']
}))

// that means your browser route is: localhost:5050/api
const itemRoutes = require('./routes/item.routes')
app.use('/api', itemRoutes)

// LISTEN
app.listen(port, () => {
    console.log(`Example Lovro app listening at http://localhost:${port}`)
    console.log(__dirname)
  })
  