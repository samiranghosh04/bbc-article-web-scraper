const PORT = 8000;

const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

const url = "https://www.bbc.com/";

axios(url)
    .then(res => {
        const html = res.data;
        const $ = cheerio.load(html)
        const articles = []

        $('.media__title', html).each(function(){
            const title = $(this).text()
            const link = $(this).find('a').attr('href')
            articles.push({
                title,
                link
            })
        })

        console.log(articles)
    }).catch(err => console.log(err))


app.listen(PORT, ()=> console.log(`Server running on PORT, ${PORT}`));
