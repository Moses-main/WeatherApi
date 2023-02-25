const port = 8000


// import express from 'express'
// import axios from 'axios'
// import cheerio from 'cheerio'
articles = []

const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json('Welcome to my climate news change API')
})

app.listen(port, () => console.log('Server is running on PORT ${port}'))

// app.get('/news', (req, res) => {
//     axios.get("https://chat.openai.com/chat")
//         .then((response) => {
//             const html = response.data
//             const $ = cheerio.load(html)
// $('a:contains("climate")', html).each(function(){
// const title = $(this).text()
// const url = $(this).attr('href')
// articles.push({
//     tiltle,
//     url
// })
// })
// res.json(articles)

//         })
// })

// app.listen(PORT, () => console.log('server running on PORT ${PORT}'))
// app.listen(PORT, () => console.log('server is running on port ${PORT}'))