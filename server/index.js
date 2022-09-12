const axios = require("axios");
const cheerio = require("cheerio");
const schedule = require("node-schedule");

const URL = "https://www.ndtv.com/";
const category = "world-news/";
const news = [];

const getNews = async (URL, category) => {
  for (let i = 1; i <= 14; i++) {
    try {
      const response = await axios.get(URL + category + `page-${i}`);
      const $ = cheerio.load(response.data);

      $(".news_Itm").each((i, item) => {
        const $item = $(item);
        const name = $item.find("h2").text();

        const content = $item.find(".newsCont").text();
        const dateContent = $item.find(".posted-by").text().trim().split("|");
        const imageURL = $item.find(".news_Itm-img > a > img").attr("src");
        const redirectURL = $item.find(".news_Itm-img > a").attr("href");

        const author = dateContent[0].trim();
        const date = dateContent[1];

        let headLine;

        if (name !== "" || content !== "") {
          headLine = {
            name,
            content,
            date,
            author,
            imageURL,
            redirectURL,
          };
          news.push(headLine);
        }
      });
    } catch (error) {
      console.log(`Error is \n ${error}`);
    }
  }
  console.log(news);
};

getNews(URL, category);

const job = schedule.scheduleJob("1 * * * *", function () {
  console.log("The answer to life, the universe, and everything!");
});
