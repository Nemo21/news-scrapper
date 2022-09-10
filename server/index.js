const axios = require('axios')
const cheerio = require('cheerio');
const schedule = require('node-schedule');

const URL = 'https://www.ndtv.com/'
const category = 'world-news'

const getNews = async (URL, category) => {

    try {
        const response = await axios.get(URL + category);
        const $ = cheerio.load(response.data);
        const news = [];

        $('.news_Itm').each((i, item) => {
            const $item = $(item);
            const name = $item.find('h2').text()

            const content = $item.find('.newsCont').text()
            const dateContent = $item.find('.posted-by').text().trim().split('|')
            const imageURL = $item.find('.news_Itm-img > a > img').attr('src')
            const redirectURL = $item.find('.news_Itm-img > a').attr('href')

            const author = dateContent[0].trim()
            const date = dateContent[1]

            let headLine;

            if(name !== '' || content !== ''){       
                headLine = {
                    name,
                    content,
                    date,
                    author,
                    imageURL,
                    redirectURL
                }
                news.push(headLine)
            }
        })

        console.log(news);
    } catch (error) {
        console.log(`Error is \n ${error}`);
    }

}

getNews(URL, category)


const job = schedule.scheduleJob('42 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});