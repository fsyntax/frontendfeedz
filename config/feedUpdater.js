'use strict';

const Parser = require('rss-parser');

// 1
function diffInDays(date1, date2) {
  const difference = Math.floor(date1) - Math.floor(date2);
  return Math.floor(difference / 60 / 60 / 24);
}

// 2
async function getNewFeedItemsFrom(feedUrl) {
  const parser = new Parser();
  const rss = await parser.parseURL(feedUrl);
  const todaysDate = new Date().getTime() / 1000;
  return rss.items.filter((item) => {
    const blogPublishedDate = new Date(item.pubDate).getTime() / 1000;
    return diffInDays(todaysDate, blogPublishedDate) === 0;
  });
}

async function getFeedUrls() {
  return await strapi.db.query('api::feedsource.feedsource').findMany({
    where: {
      enabled: true,
    }
  })
  // console.log(strapi.admin.services.feedsources)
}

// 4
async function getNewFeedItems() {
  let allNewFeedItems = [];

  const feeds = await getFeedUrls();

  // console.log(feeds)
  for (let i = 0; i < feeds.length; i++) {
    const { link } = feeds[i];
    const feedItems = await getNewFeedItemsFrom(link);
    allNewFeedItems = [...allNewFeedItems, ...feedItems];
  }
  // console.log(allNewFeedItems)
  return allNewFeedItems;
}

// 5
async function main() {

  const feedItems = await getNewFeedItems();

  for (let i = 0; i < feedItems.length; i++) {
    const item = feedItems[i];

    const newsItem = [

    ];
    // console.log(newsItem)
    await strapi.db.query('api::newsitem.newsitem').createMany({
      data: [
        {
          title: item.title,
          preview: item.contentSnippet,
          link: item.link,
          creator: item.creator,
          sponsored: false,
        },
      ]
    });
  }
}
// 6
module.exports = {
  main,
};