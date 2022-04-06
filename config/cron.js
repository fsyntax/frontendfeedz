'use strict';
    
module.exports = {
  '* * * * *': async({strapi}) => {
    console.log("Cron running, but waiting for real action!");
    // console.log(strapi.config);
    // await strapi.config.tasks.updateFeed();
  }
}