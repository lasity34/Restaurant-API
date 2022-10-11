const express = require('express')
const request = require('request-promise')

const app = express()
const PORT = process.env.PORT || 5000

const apiKey = '19e547e5f4c8e8fb857ea7fae9ac3bdc'
const baseURL = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to Cape Town restaurants API')
})

// get details products

app.get('/products/:productId')

app.listen(PORT, () => console.log(`server running on port ${PORT}`))