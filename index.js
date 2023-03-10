const port = 8000



const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const app = express()


articles = []

app.listen(port, () => console.log('Server is running on PORT ${port}'))

app.get('/news', (req, res) => {
    axios.get("https://www.theguardian.com/environment/climate-crisis")
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            $("a:contains('climate')", html).each(function () {
                const title = $('this').text()
                const url = $('this').attr('href')
                articles.push({
                    title,
                    url
                })
            })
            res.json(articles)
        }).catch((err) => console.log(err))
})
