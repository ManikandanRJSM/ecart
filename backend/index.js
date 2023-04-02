const express = require('express')
const dotenv = require('dotenv').config()
const { connectDB } = require('./config/db')

connectDB()
const app = express()

const port = process.env.PORT

app.use(express.json()); // used to fetch request in the form of json
app.use(express.urlencoded({ extended : true })) // used to fetch request in the form of urlencodes

app.use('/api/admin', require('./routes/admin/route')) // importing the admin routes

app.listen(port, () => {
    console.log(`listening port ${port}`)
})