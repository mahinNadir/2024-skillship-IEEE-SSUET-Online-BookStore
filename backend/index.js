const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errormiddleware')
const connectionDB = require('./config/db')

const port = process.env.PORT || 5000

connectionDB(process.env.MONGO_URI)
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//user routes
app.use('/api/user', require('./routes/userRoutes'))

//book routes
app.use('/api/books', require( './routes/bookRoutes' ))

//order routes
app.use('/api/orders', require( './routes/orderRoutes' ))

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`))

