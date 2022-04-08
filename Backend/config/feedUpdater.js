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
  // console.log(await strapi.db.query('api::feedsource.feedsource').findMany({where:{enabled: true}}));
  return await strapi.db.query('api::feedsource.feedsource').findMany({
    where: {
      enabled: true,
    }
  })
  // console.log(strapi.admin.services.feedsources)
}

async function getExistingNewsItems() {
  return await strapi.db.query('api::newsitem.newsitem').findMany()
};
// 4
async function getNewFeedItems() {
  let allNewFeedItems = [];

  const feeds = await getFeedUrls();

  // console.log(feeds)
  for (let i = 0; i < feeds.length; i++) {
    const { link } = feeds[i];
    const feedItems = await getNewFeedItemsFrom(link);
    allNewFeedItems = [...allNewFeedItems, ...feedItems];
    // console.log(feedItems)
  }
  // console.log(allNewFeedItems)
  return allNewFeedItems;
}

// 5
async function main() {

  const feedItems = await getNewFeedItems();
  const existingFeedItems = await getExistingNewsItems()
// Check if Newsfeed is already in db and if, don't add to new items feed
  const existingFeedItemsTitles = new Set(existingFeedItems.map((el) => el.title));
  const feedItemsFiltered = feedItems.filter((el) => !existingFeedItemsTitles.has(el.title));

  for (let i = 0; i < feedItemsFiltered.length; i++) {
    const item = feedItemsFiltered[i];
    // if(await strapi.db.query('api::newsitem.newsitem').find({where: {title: item.title}}) == ) {

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
    // }
  }
}
// 6
module.exports = {
  main,
};