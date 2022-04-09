'use strict';
    
module.exports = {
  '0 12 * *': async({strapi}) => {
    console.log("Cron running, real action going on here!");
    // console.log(strapi.config);
    await strapi.config.tasks.updateFeed();
  }
}