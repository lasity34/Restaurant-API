const express = require('express')
const request = require('request-promise')

const app = express()
const PORT = process.env.PORT || 5000

// const apiKey = '19e547e5f4c8e8fb857ea7fae9ac3bdc'


const generateScrapperUrl = (apiKey) = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to Cape Town restaurants API')
})

// get details products
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params
    const{ api_key } = req.query

    try {
        const response = await request(`${generateScrapperUrl(apiKey)}&url=https://www.amazon.com/dp/${productId}`)

        res.json(JSON.parse(response))
    } catch (error) {
        res.json(error)
    }
})

// get product reviews

app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params
    const{ api_key } = req.query

    try {
        const response = await request(`${generateScrapperUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`)

        res.json(JSON.parse(response))
    } catch (error) {
        res.json(error)
    }
})


// get product offers

app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params

    try {
        const response = await request(`${generateScrapperUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        
        res.json(JSON.parse(response))
    } catch (error) {
        res.json(error)
    }
})


// search query

app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params

    try {
        const response = await request(`${generateScrapperUrl(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`);
       

        res.json(JSON.parse(response))
    } catch (error) {
        res.json(error)
    }
})




app.listen(PORT, () => console.log(`server running on port ${PORT}`))