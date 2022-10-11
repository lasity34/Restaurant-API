const express = require('express')
const request = require('request-promise')

const app = express()
const PORT = process.env.PORT || 5000

const apiKey = '19e547e5f4c8e8fb857ea7fae9ac3bdc'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to Cape Town restaurants API')
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))