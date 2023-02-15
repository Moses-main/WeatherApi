const PORT = 8000
import express from 'express'
import axios from 'axios'
import cheerio from 'cheerio'

const app = express()
app.get('/', (req, res) => {
    res.json('Welcome to my Climate Change Api')
})


app.listen(PORT, () => console.log('server running on PORT ${PORT}'))